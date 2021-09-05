//Libraries
import express from "express";
import passport from "passport";



//Database Model
import { ImageModel, MenuModel } from "../../database/allModels";



const Router = express.Router();



/*
Route        /list
Des          Get all menu based on a restaurant
params       _id
Access       PUBLIC
Method       GET
*/
Router.get("/list/:_id", async (req, res) => {
                                    
                            try 
                            {
                            const {_id} = req.params;
                            const menus = await MenuModel.findOne(_id);

                            return res.json({menus});


                            } 
                            catch (error) 
                            {
                              return res.status(500).json({error: error.message});   
                            }
                                               })



/*
Route        /image
Des          Get all menu images based on id
params       _id
Access       PUBLIC
Method       GET
*/
Router.get("/image/:_id", async (req, res) => {
                                    
    try 
    {
    const {_id} = req.params;
    const menus = await ImageModel.findOne(_id);

    return res.json({menus});


    } 
    catch (error) 
    {
      return res.status(500).json({error: error.message});   
    }
                       })


                       export default Router;
