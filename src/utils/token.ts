import { JwtPayload, sign, verify } from 'jsonwebtoken';
import 'dotenv/config';

export function createAccessToken(userId: string): string {
    const accessToken: string = sign({
        userID: userId
      }, process.env.TOKEN_SECRET!, { expiresIn: '1h' })
    return accessToken;
}

export function createRefreshToken(userId: string): string {
    const refreshToken: string = sign({
        userID: userId
    }, process.env.TOKEN_SECRET!, { expiresIn: '7d' });
    return refreshToken;
}

export function compareToken(token: string): JwtPayload|string {
    const data: JwtPayload|string = verify(token, process.env.TOKEN_SECRET!);
    return data;
}