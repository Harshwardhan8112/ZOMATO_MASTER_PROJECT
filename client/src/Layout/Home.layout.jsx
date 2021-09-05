import react from "react";
import FoodTabs from "../Component/FoodTab"

//components
import Navbar from "../Component/Navbar";


const HomeLayout = (props) =>{

    return <>
     <Navbar/>
      <FoodTabs/>
    <div className="container mx-auto px-4 lg:px-20">
    {props.children}
    </div>
   
    

    
    
    </>
};

export default HomeLayout;