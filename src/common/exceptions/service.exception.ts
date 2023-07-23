import { HttpException, HttpStatus } from '@nestjs/common';
import { createHttpExceptionBody } from '../utils/handle-exception-body.util';

/**
 * 程序失败但 HTTP StatusCode 200
 */
export class ServiceException extends HttpException {
  constructor(message?: any, statusCode?: number) {
    console.log('__LYG_JAX', '---222', message); // debug-log
    super(createHttpExceptionBody(message, statusCode), HttpStatus.OK);
  }
}
