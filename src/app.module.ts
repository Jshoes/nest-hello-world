import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { DogModule } from './dog/dog.module';
import { MonkeyModule } from './monkey/monkey.module';

@Module({
  imports: [DogModule, MonkeyModule],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule {}
