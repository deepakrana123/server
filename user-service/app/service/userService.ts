import { UserRepository } from "app/repository/userRepository";
import { SuccessResponse } from "app/utility/response";
import {  APIGatewayProxyEventV2 } from "aws-lambda";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class UserService {
  repository:UserRepository
  constructor(repository:UserRepository) {
    this.repository=repository
  }
  async CreateUser(event:APIGatewayProxyEventV2) {
    const body=JSON.parse(JSON.stringify(event.body))
    return SuccessResponse({ message: "user created succuesfully" });
  }
  async UserLogin(event:APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "user logged in succuesfully" });
  }
  async UserVerify(event:APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "user created succuesfully" });
  }
  async UserCreateProfile(event:APIGatewayProxyEventV2) {
    return SuccessResponse({
      message: "response form the create user profile",
    });
  }
  async UserGetProfile(event:APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Get User Profile Successfully" });
  }
  async UserEditProfile(event:APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response for edit user profile" });
  }

  async UserCreateCart(event:APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "user cart created successfully" });
  }
  async UserGetCart(event:APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response form create payment method" });
  }
  async UserUpdateCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "user cart updated successfully" });
  }
  async UserGetPaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response form the payment gateway" });
  }
  async UserCreatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response form the payment gateway" });
  }
  async UserUpdatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response form the payment gateway" });
  }
}
