import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClientModule } from './modules/client/client.module';
import { CoreModule } from './modules/core/core.module';
import { OperatorModule } from './modules/operator/operator.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();

  //Setup client swagger
  const clientSwagger = new DocumentBuilder()
    .setTitle('Client-API')
    .setDescription('API documentation for client')
    .setVersion('2.0')
    //.addBearerAuth()
    .build();
  const clientDocument = SwaggerModule.createDocument(app, clientSwagger, {
    include: [ClientModule],
  });
  SwaggerModule.setup('client/docs/api', app, clientDocument);

  //Setup core swagger
  const coreSwagger = new DocumentBuilder()
    .setTitle('Core-API')
    .setDescription('API documentation core')
    .setVersion('2.0')
    .addBearerAuth()
    .build();
  const coreDocument = SwaggerModule.createDocument(app, coreSwagger, {
    include: [CoreModule],
  });
  SwaggerModule.setup('core/docs/api', app, coreDocument);

  //Setup operator swagger
  const operatorSwagger = new DocumentBuilder()
    .setTitle('Operator-API')
    .setDescription('API documentation for operator')
    .setVersion('2.0')
    .addBearerAuth()
    .build();
  const operatorDocument = SwaggerModule.createDocument(app, operatorSwagger, {
    include: [OperatorModule],
  });
  SwaggerModule.setup('operator/docs/api', app, operatorDocument);
  await app.listen(3000);
}
bootstrap();
