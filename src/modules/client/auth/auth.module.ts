import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/modules/core/user/user.module';
import { JwtConstant } from 'src/modules/shared/constants/auth.constants';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: JwtConstant.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  //   providers: [
  //     {
  //       provide: APP_GUARD,
  //       useClass: AuthGuard,
  //     },
  //     UserModule,
  //   ],
  exports: [UserModule],
})
export class AuthModule {}
