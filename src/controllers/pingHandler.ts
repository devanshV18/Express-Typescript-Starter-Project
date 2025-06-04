import { NextFunction, Request, Response } from "express";
import fs from "fs"

// export const pingHandler = (req: Request, res:Response, next: NextFunction) => {
//     // console.log(req.body)
//     // console.log(req.query)
//     // console.log(req.params)
//     res.status(200).json({
//         success: true,
//         message: "Pong!"
//     })
// }

//demonstrating error handling for an async middleware using next() by calling next(err) that by passes all the non-error handling middleware and invokes the first error handling middlewware -> in this case the default one -> The default error handler successfully handles the error and preserves the server from crashing.

export const pingHandler = async (req: Request, res:Response, next: NextFunction) => {
    await fs.readFile("sample", (err, data) => {
        if(err){
            console.log("Error in async flow", err )
            next(err) //this line ensures the error handling
        }
    })
}

