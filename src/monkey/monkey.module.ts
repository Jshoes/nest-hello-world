import { Module } from '@nestjs/common';
import { MonkeyService } from './monkey.service';
import { MonkeyResolver } from './monkey.resolver';

@Module({
  providers: [MonkeyResolver, MonkeyService]
})
export class MonkeyModule {}
