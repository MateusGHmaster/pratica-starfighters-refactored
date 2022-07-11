import { AxiosError } from 'axios';
import { AppError } from '../utils/errorUtils.js';
import { NextFunction, Request, Response } from 'express';

export function errorHandlerMiddleware (error: Error | AxiosError | AppError, req: Request, res: Response, next: NextFunction) {

    if ('response' in error) {
        return res.sendStatus(error.response.status);
    }

    if ('type' in error) {
        if (error.type === 'not_found') {
            return res.sendStatus(404);
        } else if (error.type === 'bad_request') {
            return res.sendStatus(400);
        }
    }

    res.sendStatus(500);

} 