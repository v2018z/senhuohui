import { HttpException, HttpStatus } from '@nestjs/common';
import { createHttpExceptionBody } from '../utils/handle-exception-body.util';

/**
 * 程序失败但 HTTP StatusCode 200
 */
export class BadHandleException extends HttpException {
  constructor(message?: any, statusCode?: number) {
    super(createHttpExceptionBody(message, statusCode), HttpStatus.OK);
  }
}
