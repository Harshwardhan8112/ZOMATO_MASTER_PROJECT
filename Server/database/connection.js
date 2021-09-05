import mongoose from "mongoose";



//async alone is promise in background
export default async () => {
                                return mongoose.connect(process.env.MONGO_URL, {
                                                                            useNewUrlParser: true,
                                                                            useUnifiedTopology: true,
                                                                            useCreateIndex: true,
                                                                            useFindAndModify:false,    
                                                                               }
                                                        );        
                           };