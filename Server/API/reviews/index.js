//Libraries
import express from "express";
import passport from "passport";



//Database Model
import { ReviewModel } from "../../database/allModels";



const Router = express.Router();



/*
Route        /new
Des          add new food review
params       none
BODY          review Object
Access       PUBLIC
Method       POST
*/

Router.post("/new",async (req,res) => {
try
{
  
   const {reviewData} = req.body;

   await ReviewModel.create(reviewData);
   return res.json({review: "Successfully created review."});
} 
catch (error) 
{
    return res.status(500).json({error: error.message});
}

});


/*
Route        /delete
Des          delete a review
params       _id
BODY         none
Access       PUBLIC
Method       DELETE
*/
Router.delete("/delete/:_id", async (req,res) => {
    try 
    {
        const {_id} = req.params;
        await ReviewModel.findByIdAndDelete(_id);
        
        return res.json({review: "Successfully deleted review."});
    } 
    catch (error) 
    {
        return res.status(500).json({error: error.message});

    }
});
export default Router;