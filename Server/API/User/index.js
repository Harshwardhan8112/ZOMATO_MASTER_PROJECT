//Libraries
import express from "express";
import passport from "passport";



//Database Model
import { UserModel } from "../../database/allModels";



const Router = express.Router();



/*
Route        /:_id
Des          Get user data
params       _id
BODY         none
Access       PUBLIC
Method       GET
*/
Router.get("/:_id", async (req,res) => {

    try 
    {
        const  {_id} = req.params;
        const getUser = await UserModel.findById(_id);

        return res.json({user : getUser});
    } 
    
    catch (error) 
    {
        return res.status(500).json({error: error.message});
    }    
    

});

/*
Route        /update/:userID
Des          update userID
params       userID
BODY         none
Access       PUBLIC
Method       PUT
*/

Router.put("/update/:userID", async (req,res) => {

try 
{
    const {userID} = req.params;
    const {userData} = req.body;

    const updateUserData = await UserModel.findByIdAndUpdate(userID, 
        {
        $set: userData,
        },
    
        {new: true});
return res.json({user : updateUserData});

} 

catch (error) 
{
    return res.status(500).json({error: error.message});  
}

});


export default Router;