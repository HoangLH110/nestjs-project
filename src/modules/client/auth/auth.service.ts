import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/modules/core/user/dto/user.dto';
import { UserService } from 'src/modules/core/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(body: UserDto) {
    const checkBefore = await this.userService.findOne({ name: body.name });
    if (checkBefore) {
      return {
        code: '',
        error: '',
      };
    }
    const user = await this.userService.create(body);
    const payload = { sub: user.id, userName: user.name };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
