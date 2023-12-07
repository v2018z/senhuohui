import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import config from './config/app';

console.log(config);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(__dirname, '../public/', 'static'), {
    prefix: '/static',
  });
  app.useStaticAssets(join(__dirname, '../public/', 'huayang'), {
    prefix: '/huayang',
  });
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(config.port);
  console.log(`服务已启动: prost ${config.port}`);
}
bootstrap();
