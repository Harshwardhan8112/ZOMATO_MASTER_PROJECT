import react from "react";


const DeliverySmCard = ({image, title}) => {
    return <>
    <div className=" lg:hidden bg-white shadow rounded:md md:w-24 mb-5">
        <div className="w-24 h-24 md:w-full">
            <img src={image}
                alt="food photo"
                className="w-full h-full object-cover rounded-t-md"/> 
        </div>
        <div>
            <h3 className="text-sm text-center font-light my-1">{title}</h3>
        </div>
    </div>
    </>
    };

const  DeliveryLgCard = ({image,title}) =>{
      
    return <>
    <div className=" hidden lg:block w-64 h-48 ">
        <div className="w-full h-full ">
            <img src={image}
                alt="food photo"
                className="w-full h-full object-cover rounded-md shadow-lg"/> 
        </div>
        <div>
            <h3 className="text-xl font-medium  font-light my-1">{title}</h3>
        </div>
    </div>
    </>
    }
  

const DeliveryCategory = (props) => {

    return <>
    <DeliverySmCard {...props}/>
    <DeliveryLgCard {...props}/>
    
    </>
}

export default DeliveryCategory;