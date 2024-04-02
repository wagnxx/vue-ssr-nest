import { Controller, Get, Param } from '@nestjs/common'
import { ApiProfileService } from './profile.service'

@Controller('/api')
export class ApiController {
  constructor (private readonly apiProfileService: ApiProfileService) {}

  @Get('/profile')
  async getDetailData (@Param() params) {
    const data = await this.apiProfileService.index(params.id)
    return data
  }
}
