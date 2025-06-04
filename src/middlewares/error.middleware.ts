//our custom error handling middleware (containing the signature as -> (err,req,res,next)) by overriding/extending the default error handling middleware of express

import { Request, Response, NextFunction } from "express";

export const genericErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(501).json({
        success: false,
        message: "Generic Error handler"
    })
}