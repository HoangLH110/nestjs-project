import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'hoang110',
  database: 'test',
  subscribers: [],
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
module.exports = typeOrmConfig;
