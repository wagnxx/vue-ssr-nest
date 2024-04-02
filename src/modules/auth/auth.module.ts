import { Module } from '@nestjs/common'
import {JwtModule} from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { LocalStrategy } from './strategies/local.strategy'
import { PassportModule } from '@nestjs/passport'
import { JwtSrategy } from './strategies/jwt.strategy'
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
        secret: 'abc123',
        signOptions: {
            expiresIn: '1h'
        }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy,JwtSrategy ]
})
export class AuthModule {}