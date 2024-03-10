"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = exports.SuccessResponse = exports.formatResponse = void 0;
const formatResponse = (statusCode, message, data) => {
    if (data) {
        return {
            statusCode: statusCode,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                message: message,
                data: data,
            }),
        };
    }
    else {
        return {
            statusCode: statusCode,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                message: message,
            }),
        };
    }
};
exports.formatResponse = formatResponse;
const SuccessResponse = (data) => {
    return (0, exports.formatResponse)(200, "success", data);
};
exports.SuccessResponse = SuccessResponse;
const ErrorResponse = (code = 1000, error) => {
    if (Array.isArray(error)) {
        const errorObject = error[0].constraints;
        const errormessage = errorObject[Object.keys(errorObject)[0]] || "Error Occured";
        return (0, exports.formatResponse)(code, errormessage, []);
    }
    else {
        return (0, exports.formatResponse)(code, `error:${error}`, []);
    }
};
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=response.js.map