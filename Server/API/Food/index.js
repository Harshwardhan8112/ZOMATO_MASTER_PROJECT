//Libraries
import express from "express";
import passport from "passport";


//validation
import { ValidateCategory, ValidateRestaurantId } from "../../validation/food";




//Database Model
import { FoodModel } from "../../database/allModels";



const Router = express.Router();



/*
Route        /r
Des          Get all foods based on a restaurant
params       none
Access       PUBLIC
Method       GET
*/
Router.get("/r/:_id",async (req, res)=> {
                                try 
                                {
                                    await ValidateRestaurantId(req.params);


                                const {_id} = req.params;
                                const foods = await FoodModel.find({restaurant: _id});

                                return res.json({ foods });

                                } 
                                catch (error) 
                                {
                                return res.status(500).json({error: error.message});    
                                }
                                        });



/*
Route        /c
Des          Get all food based on category 
params       none
Access       PUBLIC
Method       GET
*/
Router.get("/r/:category",async (req, res)=> {
    try 
    {
        await ValidateCategory(req.params);

    const {category} = req.params;
    const foods = await FoodModel.find({ category: {
                                                    $regex: category,
                                                    options: "i",
                                                    }
                                      });

    return res.json({ foods });

    } 
    catch (error) 
    {
    return res.status(500).json({error: error.message});    
    }
                                              }
          );




                                        export default Router;
                                

