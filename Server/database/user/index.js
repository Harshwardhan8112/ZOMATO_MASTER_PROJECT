import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
        {
            fullname: {
                        type: String, required: true
                      },
            email: {
                      type: String, required: true
                   },

            password: {
                        type: String
                      },
            address:[
                      {
                           detail:{
                                    type:String
                                  }, for: {
                                            type: String
                                          }
                      }
                   ],

            phoneNumber:[
                            {
                                type: Number
                            }
                        ],
        },
        {
            timestamps: true,

        }
        //timestamp gives createdate, updatedated information
    
    
    );

    UserSchema.methods.generateJwtToken = function (){
                        
      return jwt.sign(
                         { 
                           user: this._id.toString()
                         },

                          
                          "Zomato App"
                          
                    );
                                                     }

    //reducing code in API index.js
    UserSchema.statics.findByEmailAndPhone = async ({email, phoneNumber}) => {

                                                              const checkUserByEmail = await UserModel.findOne({email});
                                                              const checkUserByPhone = await UserModel.findOne({phoneNumber});
                                                                           
                                                                           

                                                        if (checkUserByEmail || checkUserByPhone){

                                                                throw new Error("User Already exists");

                                                                                                 }

                                                        return false;
                                                                             };

    UserSchema.statics.findByEmailAndPassword = async({email, password}) =>{
                                                       
                                                        //check user by email
                                                        const user = await UserModel.findOne({email});
                                                        

                                                        if(!user) throw new Error("User does not Exist..!")

                                                        //compare password
                                                        const doesPasswordMatch = await bcrypt.compare(
                                                                                  password, user.password
                                                                                                      );
                                                          if(!doesPasswordMatch) throw new Error("In valid Password");
                                                                                return user;                    
                                                                           };                                                                       

UserSchema.pre("save", function(next){
//pre is something that run your logic at particular stage of mongoose/ transaction

                          const user = this;

                          if(!user.isModified("password")) 
                          
                          return next();

                          //generate bcrypt salt
                          bcrypt.genSalt(8, (error, salt) => {

                                                          if(error) return next(error);

                                                          //if success hash the password
                                                          bcrypt.hash(user.password, salt, (error, hash) =>{
                                                                                                      if(error) return next(error);
                                                                                                      
                                                                                                      //assigning hashed password
                                                                                                      user.password=hash;

                                                                                                      return next();
                                                                                                          }
                                                                      );
                                                            } 
                                        );
                                     }
              );                                                                 



export const UserModel = mongoose.model("Users", UserSchema);