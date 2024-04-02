import { Module } from '@nestjs/common'
import { ApiController } from './api.controller'
import { ApiProfileService } from './profile.service'

@Module({
  imports: [

  ],
  controllers: [ ApiController],
  providers: [ApiProfileService]
})

export class ProfileModule {}
