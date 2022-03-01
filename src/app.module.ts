import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { MyFiltre } from './filters/MyFiltre.filter';
import { FirstMiddleWare } from './middlewares/FirstMiddleware.middleware';
import { logger } from './middlewares/logger.middleware';
import { PremierModule } from './premier/premier.module';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: MyFiltre,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FirstMiddleWare)
      .forRoutes('*')
      .apply(logger)
      .forRoutes(TodoController);
  }
}
