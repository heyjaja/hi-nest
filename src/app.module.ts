import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // url을 가져오고 함수 실행 router 역할
  providers: [AppService],
})
export class AppModule {}
