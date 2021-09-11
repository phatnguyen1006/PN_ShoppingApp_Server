abstract class HttpError extends Error {
    public status: number | undefined;
    public message!: string;
}

export class BadRequest extends HttpError {
    constructor(message = 'Bad Request') {
        super();
        this.message = message;
        this.status = 400;
    }
}

export class Unauthorized extends HttpError {
    constructor(message = 'Unauthorized') {
        super();
        this.message = message;
        this.status = 401;
    }
}