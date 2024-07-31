import "@/database/connection";
import Users from "@/models/user"
import SendResponse from "@/utils/response";
import { RESPONSE_MESSAGES } from "@/utils/responseMessages";
import StatusCodes from "@/utils/statusCodeEnum";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export default async (req, res) => {
    
    try {
        const user = await Users.findOne({ email: req.body.email });
       
        
  
        const validPassword =  bcrypt.compare(
          req.body.password,
          user.password
        );
        const token = jwt.sign({ _id: user._id,email:user?.email }, process.env.SECRET_KEY);
        const resPayload = {
          // message: MESSAGES.LOGIN_SUCCESS,
          payload: { token: token },
        };
        return SendResponse(res,resPayload,StatusCodes.OK)
      } catch (err) {
        return SendResponse(res,err.message,StatusCodes.INTERNAL_SERVER_ERROR)
      }
};

