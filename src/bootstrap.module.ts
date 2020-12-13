import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import * as path from 'path';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.load(
      path.resolve(__dirname, './', 'config', '**/!(*.d).{ts,js}'),
      {
        path: path.resolve(process.cwd(), 'env', !ENV ? '.env' : `${ENV}.env`),
      },
    ),
  ],
})
export class BootstrapModule {}
