import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Catch(HttpException)
export class MyFiltre implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const exceptionResponse = exception.getResponse();
    response.status(exception.getStatus()).json({
      message: "le message d'erreur est : " + exception.message,
      statusCode: exception.getStatus(),
      timestamp: new Date().toISOString(),
      path: request.url,
      exceptionResponse,
    });
    return response;
  }
}
