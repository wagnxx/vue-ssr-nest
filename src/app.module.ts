import { Module } from '@nestjs/common'
import { DetailModule } from './modules/detail-page/detail.module'
import { indexModule } from './modules/index-page/index.module'
import { ProfileModule } from './modules/profile-page/profile.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [DetailModule, indexModule, ProfileModule, AuthModule],
})
export class AppModule {}
