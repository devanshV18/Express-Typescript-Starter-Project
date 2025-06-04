import { NextFunction, Request, Response } from "express";
import fs from "fs/promises"

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

// export const pingHandler = (req: Request, res:Response, next: NextFunction) => {
//     fs.readFile("sample", (err, data) => {
//         if(err){
//             console.log("Error in async flow", err )
//             next(err) //this line ensures the error handling
//         }
//     })
// }


//demonstrating a basic on the fly custom error handling in an async operation using try catch
//Basically the below code handles the error in catch block by sending a custom response.

//The problem with this approach(below) -> alot of error handling may be done in the same way for multiple controllers where majority of the controllers might have the same or similar code handling their errors which is very tiring and unoptimised as it is repeated coding. So its better to implement a more generic or central error handler by somewhat leveraging or extending the default error handler provided to us by express.

export const pingHandler = async (req: Request, res:Response, next: NextFunction) => {
    try {
        await fs.readFile("sample") //the promise gets rejected at this line and the control directly moves inside catch block.
        res.status(200).json({success: true, message: "Pong"})
    } catch (error) {
        console.log("error in pingHanlder catch block\n", error)
        res.status(500).json({success: false, message: "Error occured/ Invalid file name"})
    }
}

