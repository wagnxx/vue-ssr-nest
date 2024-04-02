import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
 

@Injectable()
export class JwtSrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExcepiration: false,
            secretOrKey: 'abc123'
        })
    }

    validate(payload: any) {
        return payload
    }
}