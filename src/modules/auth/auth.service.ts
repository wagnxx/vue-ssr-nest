import { Injectable } from '@nestjs/common'
import { AuthpayloadDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
 
const fakeUsers = [
  {
    id:1,
    username: 'anson',
    password: 'password'
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbnNvbiIsImlhdCI6MTcxMjAzMDc1NywiZXhwIjoxNzEyMDM0MzU3fQ.pZWyhQwRDCVmE6i_sR_5yWxXdibS-YBIxLKx9_1ONOs
  },
  {
    id:2,
    username: 'jack',
    password: 'password123'
  },
]

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  
  validateUser({username,password}: AuthpayloadDto) {
    const findeUser = fakeUsers.find(user => user.username === username)
    if (!findeUser) return null;
    if (password === findeUser.password) {
     const {password, ...user} = findeUser
     return  this.jwtService.sign(user)
    }
  }
}
