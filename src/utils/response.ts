import type {  NextApiResponse } from 'next'
import StatusCodes from './statusCodeEnum';
import { RESPONSE_MESSAGES } from './responseMessages';
import { NextResponse } from 'next/server';
const SendResponse = (res: any, data: any = { message: RESPONSE_MESSAGES.COMMON }, status = StatusCodes.OK) => {
    return res.status(status).json({ data });
}
export default SendResponse;