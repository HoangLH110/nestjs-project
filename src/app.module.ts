import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as typeOrmConfig from './db.config';
import { OperatorModule } from './modules/operator/operator.module';
import { RouterModule } from '@nestjs/core';
import { ClientModule } from './modules/client/client.module';
import { CoreModule } from './modules/core/core.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    OperatorModule,
    RouterModule.register([
      {
        path: 'operator',
        module: OperatorModule,
      },
    ]),
    ClientModule,
    RouterModule.register([
      {
        path: 'client',
        module: ClientModule,
      },
    ]),
    CoreModule,
    RouterModule.register([
      {
        path: 'core',
        module: CoreModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
