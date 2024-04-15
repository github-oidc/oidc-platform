import { Logger, Module } from '@nestjs/common';
import { AwsService } from './aws.service';

@Module({
  providers: [AwsService],
  exports: [AwsService],
  imports: [Logger]
})
export class AwsModule {}
