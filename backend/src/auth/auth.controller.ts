import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { FacebookStrategy } from './facebook.strategy';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  async googleAuthRedirect(@Req() req) {
    return { message: 'Google Authentication Successful', user: req.user };
  }

  @Get('facebook')
  async facebookAuthRedirect(@Req() req) {
    return { message: 'Facebook Authentication Successful', user: req.user };
  }
}
