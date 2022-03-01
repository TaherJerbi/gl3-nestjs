import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { DataInterceptor } from './interceptors/DataInterceptor.interceptor';
import { NullToEmptyString } from './interceptors/NullToEmptyString.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:4200'],
    optionsSuccessStatus: 200,
  });
  app.use(helmet());
  app.useGlobalInterceptors(new DataInterceptor(), new NullToEmptyString());
  await app.listen(3000);
}
bootstrap();
