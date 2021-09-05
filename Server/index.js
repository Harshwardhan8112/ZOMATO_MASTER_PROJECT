//env varisbles
require ("dotenv").config();



//libraries
import express from "express";
//cors 
//cross origin request(allow serever to req)
import cors from "cors";
import helmet from "helmet";
import passport from "passport";



//Micro service route
import Auth from  "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";



//Database Connection
import ConnectDB from "./database/connection";

const zomato  = express();


//application middlwares
zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());



//config
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config"


//pass port configeration
googleAuthConfig(passport);
routeConfig(passport);




//Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);





zomato.get("/", (req, res) => res.json({message: "setup success"}));

zomato.listen(5000, () =>
                 ConnectDB().then(() => console.log("server access granted"))
                            .catch(() => console.log("server access granted, but database connection failed..."))
             ); 