import { APIGatewayProxyEvent } from "aws-lambda";
import { UserService } from "app/service/userService";
import { ErrorResponse } from "app/utility/response";
const service = new UserService()
export const Signup = async (event:APIGatewayProxyEvent) => {
    console.log(event,"event")
    return service.CreateUser(event)
};
export const Login = async (event:APIGatewayProxyEvent) => {
  return service.UserLogin(event)
};
export const Verify = async (event:APIGatewayProxyEvent) => {
  return service.UserVerify(event)
};

export const Profile=async(event:APIGatewayProxyEvent)=>{
    const httpMethod=event.requestContext.http.method.toLowerCase()
    if(httpMethod==='post'){
        return service.UserCreateProfile(event)
    }
    else if(httpMethod ==='put'){
        return service.UserEditProfile(event)
    }
    else if (httpMethod==='get'){
        return service.UserGetProfile(event)
    }
    else{
        return ErrorResponse(404,"requested method is not correct")
    }
}
export const Cart=async(event:APIGatewayProxyEvent)=>{
    const httpMethod=event.requestContext.http.method.toLowerCase()
    if(httpMethod==='post'){
        return service.UserCreateCart(event)
    }
    else if(httpMethod ==='put'){
        return service.UserUpdateCart(event)
    }
    else if (httpMethod==='put'){
        return service.UserGetCart(event)
    }
    else{
        return ErrorResponse(404,"requested method is not correct")
    }
}
export const Payment=async(event:APIGatewayProxyEvent)=>{
    const httpMethod=event.requestContext.http.method.toLowerCase()
    if(httpMethod==='post'){
        return service.UserCreatePaymentMethod(event)
    }
    else if(httpMethod ==='put'){
        return service.UserUpdatePaymentMethod(event)
    }
    else if (httpMethod==='put'){
        return service.UserGetPaymentMethod(event)
    }
    else{
        return ErrorResponse(404,"requested method is not correct")
    }
}
