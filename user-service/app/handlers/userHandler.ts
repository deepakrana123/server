import { APIGatewayProxyEvent, APIGatewayProxyEventV2 } from "aws-lambda";
import { UserService } from "app/service/userService";
import { ErrorResponse } from "app/utility/response";
import middy from "@middy/core";
import bodyParser from "@middy/http-json-body-parser";
import {container} from "tsyringe"
const service = container.resolve(UserService)
export const Signup = middy((event:APIGatewayProxyEventV2) => {
    return service.CreateUser(event)
}).use(bodyParser());
export const Login = async (event:APIGatewayProxyEventV2) => {
  return service.UserLogin(event)
};
export const Verify = async (event:APIGatewayProxyEventV2) => {
  return service.UserVerify(event)
};
export const Need =async(event:APIGatewayProxyEventV2)=>{
    console.log(event.requestContext.http,JSON.stringify(event.requestContext.http, null, 2))
}
export const Profile=async(event:APIGatewayProxyEventV2)=>{
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
export const Cart=async(event:APIGatewayProxyEventV2)=>{
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
export const Payment=async(event:APIGatewayProxyEventV2)=>{
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
