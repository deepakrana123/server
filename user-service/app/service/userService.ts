import { UserRepository } from "app/repository/userRepository";
import { SuccessResponse } from "app/utility/response";
import { APIGatewayProxyEvent } from "aws-lambda";

// @autoInjectable()
export class UserService {
  repository:UserRepository
  constructor(repository:UserRepository) {
    this.repository=repository
  }
  async CreateUser(event: APIGatewayProxyEvent) {
    return SuccessResponse({ message: "user created succuesfully" });
  }
  async UserLogin(event: APIGatewayProxyEvent) {
    return SuccessResponse({ message: "user logged in succuesfully" });
  }
  async UserVerify(event: APIGatewayProxyEvent) {
    return SuccessResponse({ message: "user created succuesfully" });
  }
  async UserCreateProfile(event: APIGatewayProxyEvent) {
    return SuccessResponse({
      message: "response form the create user profile",
    });
  }
  async UserGetProfile(event: APIGatewayProxyEvent) {
    return SuccessResponse({ message: "Get User Profile Successfully" });
  }
  async UserEditProfile(event: APIGatewayProxyEvent) {
    return SuccessResponse({ message: "Response for edit user profile" });
  }

  async UserCreateCart(event: APIGatewayProxyEvent) {
    return SuccessResponse({ message: "user cart created successfully" });
  }
  async UserGetCart(event: APIGatewayProxyEvent) {
    return SuccessResponse({ message: "Response form create payment method" });
  }
  async UserUpdateCart(event: APIGatewayProxyEvent) {
    return SuccessResponse({ message: "user cart updated successfully" });
  }
  async UserGetPaymentMethod(event: APIGatewayProxyEvent) {
    return SuccessResponse({ message: "Response form the payment gateway" });
  }
  async UserCreatePaymentMethod(event: APIGatewayProxyEvent) {
    return SuccessResponse({ message: "Response form the payment gateway" });
  }
  async UserUpdatePaymentMethod(event: APIGatewayProxyEvent) {
    return SuccessResponse({ message: "Response form the payment gateway" });
  }
}
