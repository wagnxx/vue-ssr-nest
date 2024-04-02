import { Body, Controller, Get, HttpException, Post, Req, Res, UseGuards } from '@nestjs/common'


import { LocalGuard } from './guards/local.guard'
import { JwtGuard } from './guards/jwt.guard'

@Controller('auth')
export class AuthController {


  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    // const user =  this.authService.validateUser(authPayload)
    return req.user;
  }


  @Get('status')
  @UseGuards(JwtGuard)
  status(@Req() req: Request) {
    return req.user;
  }
  

}
