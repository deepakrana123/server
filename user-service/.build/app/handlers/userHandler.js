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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.Cart = exports.Profile = exports.Need = exports.Verify = exports.Login = exports.Signup = void 0;
const userService_1 = require("app/service/userService");
const response_1 = require("app/utility/response");
const core_1 = __importDefault(require("@middy/core"));
const http_json_body_parser_1 = __importDefault(require("@middy/http-json-body-parser"));
const service = new userService_1.UserService();
exports.Signup = (0, core_1.default)((event) => {
    return service.CreateUser(event);
}).use((0, http_json_body_parser_1.default)());
const Login = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return service.UserLogin(event);
});
exports.Login = Login;
const Verify = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return service.UserVerify(event);
});
exports.Verify = Verify;
const Need = (event) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(event,"event")
    // console.log(event.requestContext)
    console.log(event.requestContext.http, JSON.stringify(event.requestContext.http, null, 2));
});
exports.Need = Need;
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