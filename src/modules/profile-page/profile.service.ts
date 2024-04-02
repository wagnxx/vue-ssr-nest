import { Injectable } from '@nestjs/common'
// import { Ddata } from '~/typings/data'
 

@Injectable()
export class ApiProfileService {
  async index (id): Promise<any> {
    return await Promise.resolve({a: 123})
  }
}
