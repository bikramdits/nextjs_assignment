import "@/database/connection";
import Users from "@/models/user"
import SendResponse from "@/utils/response";
import { RESPONSE_MESSAGES } from "@/utils/responseMessages";
import StatusCodes from "@/utils/statusCodeEnum";
import { NextApiRequest, NextApiResponse } from "next";

// export default async (req, res) => {
    
//             const employee = await Users.create( {firstName:"gaurav",lastName:"raina"}, {
//                 new: true,
//                 runValidators: true,
//             });

//             return SendResponse(res,employee,StatusCodes.OK)
// };

export default async (req:NextApiRequest, res:NextApiResponse) => {
	const {
		query: { id },
		method,
	} = req;
	switch (method) {
		case "POST":
			try {
				const user = await Users.create( req.body);
                    
                                return SendResponse(res,user,StatusCodes.OK)
			} catch (error) {
				return res.status(404).json({
					success: false,
				});
			}
            break;
        
        case "GET":
            try {
				const user = await Users.find();
                    
                                return SendResponse(res,user,StatusCodes.OK)
			} catch (error) {
				return res.status(404).json({
					success: false,
				});
			}
            break;

        case "PUT":
            try {
				const user = await Users.findByIdAndUpdate(id,req?.body);
                    
                                return SendResponse(res,user,StatusCodes.OK)
			} catch (error) {
				return res.status(404).json({
					success: false,
				});
			}
            break;

         case "DELETE":
            try {
				const user = await Users.findByIdAndUpdate(id,{isDeleted:true});
                if(!user){
                    return SendResponse(res,RESPONSE_MESSAGES.COMMON.CANNOT_DELETE_USER,StatusCodes.OK)
                }
                return SendResponse(res,RESPONSE_MESSAGES.COMMON.USER_DELETED_SUCCESSFULLY,StatusCodes.OK)
			} catch (error) {
         
				return res.status(404).json({
					success: false,
				});
			}
            break;
        }
        
};
