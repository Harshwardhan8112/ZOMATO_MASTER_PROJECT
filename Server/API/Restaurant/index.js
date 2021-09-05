//Libraries
import  express from "express";
import passport from "passport";
import { RestaurentModel } from "../../database/allModels";


//Models 
import { UserModel } from "../../database/allModels";

//validation
import { ValidateRestaurantSearchString, ValidateRestaurantCity } from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/food";
const Router = express.Router();


/*
Route        /
Des          get all the restaurants details based in city
params       none
Access       PUBLIC
Method       GET
*/
//restaurant/city?bengluru   (here city is key and bengluru is value)
Router.get("/",async (req, res) => {
                            try 
                            {   await ValidateRestaurantCity(req.query);
                                const { city } = req.query;
                                const restaurants = await RestaurentModel.find({city});

                                return res.json({restaurants});
                            } 
                            
                            catch (error) 
                            {
                               return res.status(500).json({error: error.message}) ;
                            }
                              });


                            
/*
Route        /
Des          get individual restaurant based on id
params       _id
Access       PUBLIC
Method       GET
*/

Router.get("/:id",async (req, res) => {
    try 
    {   await ValidateRestaurantId(req.params);
        const { _id } = req.params;
        const restaurants = await RestaurentModel.findOne(_id);
        
        if(!restaurants) return res.status(404).json({error: "Restaurant not found"}) ;
        
        return res.json({restaurants});
    } 
    
    catch (error) 
    {
       return res.status(500).json({error: error.message}) ;
    }
      });

/*
Route        /search
Des          get reataurant details based on search
params       none
Access       PUBLIC
Method       GET
*/

Router.get("/search", async (req, res)=> {
                                    
                                    try 
                                    {
                                        await ValidateRestaurantSearchString(req.body);
                                     const {searchString } = req.body;

                                     const restaurants = await RestaurentModel.find(
                                                                                    {
                                                                                        name: {
                                                                                             $regex : searchString,

                                                                                             $options: "i",
                                                                                              }
                                                                                    }
                                                                                  );
                                    
                                    if(!restaurants)  return res
                                                                .status(404)
                                                                .json({error: `No Restaurants matched with ${searchString}` }) ;

                                    

                                    } 
                                    catch (error) 
                                    {
                                        return res.status(500).json({error: error.message}) ;   
                                    }


                                        } );



    export default Router;                