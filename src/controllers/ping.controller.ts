import { NextFunction, Request, Response } from "express";
import fs from "fs/promises"

//1.

// export const pingHandler = (req: Request, res:Response, next: NextFunction) => {
//     // console.log(req.body)
//     // console.log(req.query)
//     // console.log(req.params)
//     res.status(200).json({
//         success: true,
//         message: "Pong!"
//     })
// }


//2.

//demonstrating error handling for an async middleware using next() by calling next(err) that by passes all the non-error handling middleware and invokes the first error handling middlewware -> in this case the default one -> The default error handler successfully handles the error and preserves the server from crashing.

// export const pingHandler = (req: Request, res:Response, next: NextFunction) => {
//     fs.readFile("sample", (err, data) => {
//         if(err){
//             console.log("Error in async flow", err )
//             next(err) //this line ensures the error handling
//         }
//     })
// }


//3.

//demonstrating a basic on the fly custom error handling in an async operation using try catch
//Basically the below code handles the error in catch block by sending a custom response.

//The problem with this approach(below) -> alot of error handling may be done in the same way for multiple controllers where majority of the controllers might have the same or similar code handling their errors which is very tiring and unoptimised as it is repeated coding. So its better to implement a more generic or central error handler by somewhat leveraging or extending the default error handler provided to us by express.

// export const pingHandler = async (req: Request, res:Response, next: NextFunction) => {
//     try {
//         await fs.readFile("sample") //the promise gets rejected at this line and the control directly moves inside catch block.
//         res.status(200).json({success: true, message: "Pong"})
//     } catch (error) {
//         console.log("error in pingHanlder catch block\n", error)
//         res.status(500).json({success: false, message: "Error occured/ Invalid file name"})
//     }
// }


//4. Demonstrating the usage of our generic error handler (A very basic implementation as of now) after defining the genericErrorHandler error-handling middleware in the middleware folder and also specifying its usage in server.ts

// export const pingHandler = async (req: Request, res:Response, next: NextFunction) => {
//     try {
//         await fs.readFile("sample") //the promise gets rejected at this line and the control directly moves inside catch block.
//         res.status(200).json({success: true, message: "Pong"})
//     } catch (error) {
//         console.log("error in pingHanlder catch block \n", error)
//         next(error) //this line ensures error handling by passing the control to the first error handling middleware -> in this case our genericErrorHandler in middleware folder.
//     }
// }


//5. express5 feature demo

export const pingHandler = async (req: Request, res:Response, next: NextFunction) => {

    await fs.readFile("sample") //the promise gets rejected at this line and the control directly invokes the next() as express5 has this feature -> The control goes to custom error handler if it exist or else the default error handler if no custom error handler is present.
    res.status(200).json({success: true, message: "Pong"})
   
}



