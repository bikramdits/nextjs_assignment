import "@/database/connection";
import Movies from "@/models/movies"
import SendResponse from "@/utils/response";
import { RESPONSE_MESSAGES } from "@/utils/responseMessages";
import StatusCodes from "@/utils/statusCodeEnum";
import AuthMiddlware from "@/middleware/authMiddleware";


export default async (req, res,next) => {
	const {
		query: { id },
        param,
		method,
	} = req;
    console.log(param,"param")
	switch (method) {
		case "POST":
			try {
				const movies = await Movies.create( req.body);
                                return SendResponse(res,movies,StatusCodes.OK)
			} catch (error) {
                return SendResponse(res,RESPONSE_MESSAGES.COMMON.INVALID_REQUEST,StatusCodes.INTERNAL_SERVER_ERROR)

			}
            break;
        
        case "GET":
            try {
				const movies = await Movies.find();
                    
                                return SendResponse(res,movies,StatusCodes.OK)
			} catch (error) {
                return SendResponse(res,RESPONSE_MESSAGES.COMMON.INVALID_REQUEST,StatusCodes.INTERNAL_SERVER_ERROR)

			}
            break;

        case "PUT":
            try {
				const movies = await Movies.findByIdAndUpdate(id,req?.body);
                    
                                return SendResponse(res,movies,StatusCodes.OK)
			} catch (error) {
                return SendResponse(res,RESPONSE_MESSAGES.COMMON.INVALID_REQUEST,StatusCodes.INTERNAL_SERVER_ERROR)

			}
            break;

         case "DELETE":
            try {
				const movies = await Movies.deleteOne({id:id});
                if(!movies){
                    return SendResponse(res,RESPONSE_MESSAGES.COMMON.CANNOT_DELETE_USER,StatusCodes.OK)
                }
                return SendResponse(res,RESPONSE_MESSAGES.COMMON.USER_DELETED_SUCCESSFULLY,StatusCodes.OK)
			} catch (error) {
                return SendResponse(res,RESPONSE_MESSAGES.COMMON.INVALID_REQUEST,StatusCodes.INTERNAL_SERVER_ERROR)

			}
            break;
        }
        
};
