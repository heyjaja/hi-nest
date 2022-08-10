import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 아무 decorator도 없는 property는 object에서 제외
      forbidNonWhitelisted: true, // DTO에 정의되지 않은 값이 존재하면 리퀘스트 거절
      transform: true, // 리퀘스트의 파라미터를 실제 타입으로 변환
    }),
  ); // 유효성 검사 파이프
  await app.listen(3000);
}
bootstrap();
