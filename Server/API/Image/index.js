//Libraries
import express from "express";
import passport from "passport";

import multer from "multer"; //used to process image send from user




//Database Model
import { ImageModel } from "../../database/allModels";

//Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();


//multer config
const storage = multer.memoryStorage();
const upload = multer({storage});






/*
Route        /image
Des          Uploads given image to s3 bucket and return saves file link to mongodb
params       none
Access       PUBLIC
Method       POST
*/

Router.post("/", upload.single("file"), async (req,res) => {
try 
{
  const file = req.file;

  const bucketOptions = {
    Bucket: "zomatodatabase",
    Key: file.originalname,
    Body: file.buffer, //image in ram
    ContentType: file.mimetype, 
    ACL: "public-read", //access control list
  };


const uploadImage = await s3Upload(bucketOptions);

return res.status(200).json({uploadImage})


} catch (error) 
{
    return res.status(500).json({error: error.message});        
}
} );

export default Router;