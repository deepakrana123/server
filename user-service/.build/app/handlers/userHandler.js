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
exports.Payment = exports.Cart = exports.Profile = exports.Verify = exports.Login = exports.Signup = void 0;
const userService_1 = require("app/service/userService");
const response_1 = require("app/utility/response");
const service = new userService_1.UserService();
const Signup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(event, "event");
    return service.CreateUser(event);
});
exports.Signup = Signup;
const Login = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return service.UserLogin(event);
});
exports.Login = Login;
const Verify = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return service.UserVerify(event);
});
exports.Verify = Verify;
const Profile = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === 'post') {
        return service.UserCreateProfile(event);
    }
    else if (httpMethod === 'put') {
        return service.UserEditProfile(event);
    }
    else if (httpMethod === 'get') {
        return service.UserGetProfile(event);
    }
    else {
        return (0, response_1.ErrorResponse)(404, "requested method is not correct");
    }
});
exports.Profile = Profile;
const Cart = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === 'post') {
        return service.UserCreateCart(event);
    }
    else if (httpMethod === 'put') {
        return service.UserUpdateCart(event);
    }
    else if (httpMethod === 'put') {
        return service.UserGetCart(event);
    }
    else {
        return (0, response_1.ErrorResponse)(404, "requested method is not correct");
    }
});
exports.Cart = Cart;
const Payment = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === 'post') {
        return service.UserCreatePaymentMethod(event);
    }
    else if (httpMethod === 'put') {
        return service.UserUpdatePaymentMethod(event);
    }
    else if (httpMethod === 'put') {
        return service.UserGetPaymentMethod(event);
    }
    else {
        return (0, response_1.ErrorResponse)(404, "requested method is not correct");
    }
});
exports.Payment = Payment;
//# sourceMappingURL=userHandler.js.map