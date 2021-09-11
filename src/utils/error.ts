import { Request, Response, NextFunction } from 'express';

export const catchAsync = (handler: any) =>
    (...args: [Request, Response, NextFunction]): any => handler(...args).catch(args[2]);