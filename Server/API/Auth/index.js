//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";



//Models
import {UserModel} from "../../database/user";

//validation
import { ValidateSignIn, ValidateSignUp } from "../../validation/auth";






const Router = express.Router();



/*
Route       /signup
Des         Signup with email and password
Params      none
Access      PUBLIC
Method      POST
*/


Router.post("/signup", async (req, res)   =>  {

 
           
       //validation, not touching try block if any error
        
                                            try {
                                                await ValidateSignUp(req.body.credentials);

                                                   
                                                    await UserModel.findByEmailAndPhone(req.body.credentials);

                                                        
                                                   const newUser = await UserModel.create(
                                                                                    req.body.credentials
                                                                                         );


                                                        //generate JWT token
                                                    const token = newUser.generateJwtToken();
                                                        //return
                                                    return res.status(200).json(
                                                                                    { 
                                                                                        token,
                                                                                        status: "success"
                                                                                    }
                                                                               );
                                                
                                                
                                                    } 
                                            
                                            catch(error)
                                                {
                                                    return res.status(500).json({error: error.message});
                                                }
                                        }
           );




/*
Route       /signin
Des         Signin with email and password
Params      none
Access      PUBLIC
Method      POST
*/



Router.post("/signin", async (req, res)   =>  {
        //......validation


    try {

            await ValidateSignIn(req.body.credentials);

            const user = await UserModel.findByEmailAndPassword(req.body.credentials);



                //generate JWT token
            const token = user.generateJwtToken();
                //return
            return res.status(200).json(
                                            { 
                                                token,
                                                status: "success"
                                            }
                                       );
        
        
            } 
    
    catch(error)
        {
            return res.status(500).json({error: error.message});
        }
                                                
                                                }
);



/*
Route       /google
Des         Google sign in
Params      none
Access      PUBLIC
Method      GET
*/

Router.get("/google", passport.authenticate("google", {
                                                        scope: [
                                                            "https://www.googleapis.com/auth/userinfo.profile",
                                                            "https://www.googleapis.com/auth/userinfo.email"
                                                               ]
                                                      }
                                            ));



/*
Route       /google/callback
Des         Google sign in call back
Params      none
Access      PUBLIC
Method      GET
*/

Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}),
                               (req,res) => {
                                        return res.json({token: req.session.passport.user.token})
                                            }  );



export default Router;

//Statics and methods in mongoose, methods object instantiation  

//static comes preattched, it is functions