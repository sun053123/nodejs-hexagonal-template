// create custom error struct that implement error interface
// need message code statusCode and data

export class CustomError extends Error {
    public statusCode?: number;
    public code?: string;
    public data?: any;

    constructor(message: string, statusCode: number = 500, code?: string, data?: object) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
        this.code = code;
    }
}

export type CustomErrorParams = {
    message: string;
    code?: string;
    statusCode?: number;
    data?: object;
}

const customError = ({message, statusCode, code, data}: CustomErrorParams) => {
    throw new CustomError(message, statusCode, code, data);
}

export default customError;