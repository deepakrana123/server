"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const response_1 = require("app/utility/response");
// @autoInjectable()
class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    CreateUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: "user created succuesfully" });
        });
    }
    UserLogin(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: "user logged in succuesfully" });
        });
    }
    UserVerify(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: "user created succuesfully" });
        });
    }
    UserCreateProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({
                message: "response form the create user profile",
            });
        });
    }
    UserGetProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: "Get User Profile Successfully" });
        });
    }
    UserEditProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: "Response for edit user profile" });
        });
    }
    UserCreateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: "user cart created successfully" });
        });
    }
    UserGetCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: "Response form create payment method" });
        });
    }
    UserUpdateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: "user cart updated successfully" });
        });
    }
    UserGetPaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: "Response form the payment gateway" });
        });
    }
    UserCreatePaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: "Response form the payment gateway" });
        });
    }
    UserUpdatePaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: "Response form the payment gateway" });
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map