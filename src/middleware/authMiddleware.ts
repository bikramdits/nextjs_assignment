import SendResponse from '@/utils/response'
import { RESPONSE_MESSAGES } from '@/utils/responseMessages'
import StatusCodes from '@/utils/statusCodeEnum'
import jwt from 'jsonwebtoken'

export default async (req: Request, res: Response, next: Function) => {
    const authorization = req.headers.authorization;

    try {
        if (!authorization) {
            throw new Error(RESPONSE_MESSAGES.LOGIN.UNAUTHORIZED);
        }

        const token = authorization.replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
        req.user = decoded;
    } catch (err) {
        let resPayload = {
            message: RESPONSE_MESSAGES.LOGIN.UNAUTHORIZED,
            payload: {}
        };
        return SendResponse(res, resPayload, StatusCodes.UNAUTHORIZED);
    }

    next();
};
