import { schemaRequestType } from '@credebl/enum/enum';
import { BadRequestException } from '@nestjs/common';
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, isBase64, isMimeType, registerDecorator } from 'class-validator';
import { ISchemaFields } from './interfaces/schema.interface';
interface ToNumberOptions {
    default?: number;
    min?: number;
    max?: number;
}

export function toLowerCase(value: string): string {
    return value.toLowerCase();
}

export function trim(value: string): string {
    if ('string' === typeof value) { return value.trim(); }
}

export function toDate(value: string): Date {
    return new Date(value);
}

export function toBoolean(value: string): boolean {
    // eslint-disable-next-line no-param-reassign
    value = value.toLowerCase();

    // return 'true' === value || '1' === value ? true : false;

    return Boolean('true' === value || '1' === value);

}

export function toNumber(value: string, opts: ToNumberOptions = {}): number {
    let newValue: number = Number.parseInt(value || String(opts.default), 10);

    if (Number.isNaN(newValue)) {
        newValue = opts.default;
    }

    if (opts.min) {
        if (newValue < opts.min) {
            newValue = opts.min;
        }

        if (newValue > opts.max) {
            newValue = opts.max;
        }
    }

    return newValue;
}

export function ledgerName(value: string): string {
   let network;
    network = value.replace(":", " ");
    network = network.charAt(0).toUpperCase() + network.slice(1);
    const words = network.split(" ");
    network = `${words[0]} ${words[1].charAt(0).toUpperCase()}${words[1].slice(1)}`;

    return network;

}

export function isSafeString(value: string): boolean {
    // Define a regular expression to allow alphanumeric characters, spaces, and some special characters
    const safeRegex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  
    // Check if the value matches the safe regex
    return safeRegex.test(value);
  }

  export const IsNotSQLInjection = (validationOptions?: ValidationOptions): PropertyDecorator => (object: object, propertyName: string) => {
      registerDecorator({
        name: 'isNotSQLInjection',
        target: object.constructor,
        propertyName,
        options: validationOptions,
        validator: {
          validate(value) {
            // Check if the value contains any common SQL injection keywords
            const sqlKeywords = ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP', 'UNION', 'WHERE', 'AND', 'OR'];
            for (const keyword of sqlKeywords) {
              if (value.includes(keyword)) {
                return false; // Value contains a SQL injection keyword
              }
            }
            return true; // Value does not contain any SQL injection keywords
          },
          defaultMessage(args: ValidationArguments) {
            return `${args.property} contains SQL injection keywords.`;
          }
        }
      });
    };

@ValidatorConstraint({ name: 'customText', async: false })
export class ImageBase64Validator implements ValidatorConstraintInterface {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
  validate(value: string, args: ValidationArguments) {
    // Implement your custom validation logic here
    // Validation to allow option param logo
    if ('' == value) {
      return true;
    }
    if (!value || 'string' !== typeof value) {
      throw new BadRequestException('Invalid base64 string');
    }
    const parts = value.split(',');
    if (2 !== parts.length) {
      throw new BadRequestException('Invalid data URI');
    }
    // eslint-disable-next-line prefer-destructuring
    const mimeType = parts[0].split(';')[0].split(':')[1];
    // eslint-disable-next-line prefer-destructuring
    const base64Data = parts[1];

    // Validate MIME type
    if (!isMimeType(mimeType)) {
      throw new BadRequestException('Please provide valid MIME type');
    }
    // Validate base64 data
    if (!isBase64(base64Data) || '' == base64Data || null == base64Data) {
      throw new BadRequestException('Invalid base64 string');
    }
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
  defaultMessage(_args: ValidationArguments) {
    return 'Default message received from [ImageBase64Validator]';
  }
}

// export const IsNotUUID = (validationOptions?: ValidationOptions): PropertyDecorator => (object: object, propertyName: string) => {
//   registerDecorator({
//     name: 'isNotUUID',
//     target: object.constructor,
//     propertyName,
//     options: validationOptions,
//     validator: {
//       validate(value) {
//         return !isUUID(value);
//       }
//     }
//   });
// };


export function validateSchemaPayload(schemaPayload: ISchemaFields, schemaType: string): void {
  const errors: string[] = [];

  switch (true) {
    case schemaRequestType.INDY === schemaType && !schemaPayload?.name:
      errors.push('name is required for indy schema');
      break;

    case schemaRequestType.INDY === schemaType && !schemaPayload?.version:
      errors.push('version is required for indy schema');
      break;

    case schemaRequestType.INDY === schemaType && !schemaPayload?.endorse:
      errors.push('endorse property is required for indy schema');
      break;

    case schemaRequestType.INDY === schemaType && !schemaPayload?.attributes:
      if (!Array.isArray(schemaPayload.attributes)) {
        errors.push('attributes are required for indy schema');
        break;
      }
      schemaPayload.attributes.forEach((attribute, index) => {
        switch (true) {
          case !attribute:
            errors.push(`attributes are required at index ${index} in indy schema`);

            break;
          default:
            switch (true) {
              case !attribute.attributeName:
                errors.push(`attributeName is required at index ${index} in indy schema`);
                break;
              case !attribute.schemaDataType:
                errors.push(`schemaDataType is required at index ${index} in indy schema`);
                break;
              case !attribute.displayName:
                errors.push(`displayName is required at index ${index} in indy schema`);
                break;
              default:
                break;
            }
            break;
        }
      });
      break;

    case schemaRequestType.INDY === schemaType && 0 === schemaPayload?.attributes?.length:
      errors.push('attributes array must not be empty for indy schema');
      break;

      case schemaRequestType.W3C === schemaType:

      if (!schemaPayload?.schemaName) {
        errors.push('schemaName is required for w3c schema');
      } else if (!schemaPayload?.did) {
              errors.push('did is required for w3c schema');

      } else if (!schemaPayload?.description) {
        errors.push('description is required for w3c schema');

}
      if (!Array.isArray(schemaPayload.schemaAttributes) || 0 === schemaPayload.schemaAttributes.length) {
        errors.push('schemaAttributes array must not be empty for w3c schema');
      } else {
        schemaPayload.schemaAttributes.forEach((attribute, index) => {
          if (!attribute) {
            errors.push(`schemaAttributes are required at position ${index + 1} in w3c schema`);
          } else {
            if (!attribute.title) {
              errors.push(`title is required at position ${index + 1} in w3c schema`);
            }
            if (!attribute.type) {
              errors.push(`type is required at position ${index + 1} in w3c schema`);
            }
          }
        });
      }
      break;

    default:
      break;
  }

  if (0 < errors.length) {
    throw new BadRequestException(errors);
  }
}
