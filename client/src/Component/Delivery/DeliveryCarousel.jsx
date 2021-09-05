import react from "react";
import DeliveryCategory from "./DeliveryCategory"

import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../carouselArrow";


const DeliveryCarousel = () => {

    const categories = [
        {
        image:"https://b.zmtcdn.com/data/pictures/1/903181/cd854537637de956802cc2e6d6feb385_o2_featured_v2.jpg?output-format=webp",
        title:"Arabic Food"
        },

        {
        image:"https://b.zmtcdn.com/data/pictures/chains/9/902479/7f251069939e3bac139fd5fa869ffb34_o2_featured_v2.jpg?output-format=webp",
        title:"Shawaya"
        },

        {
        image:"https://b.zmtcdn.com/data/pictures/6/19008406/2137031075da5e1625f5e0ebc54fb78f_o2_featured_v2.jpeg?output-format=webp",
        title:"Mehfil Biriyani"
        },

        {
        image:"https://b.zmtcdn.com/data/pictures/9/19340659/40da76c4cd91af98fb5853e056d06d0b_o2_featured_v2.jpg",
        title:"Lebanese food"
        },

        {
        image:"https://b.zmtcdn.com/data/pictures/3/95333/9fc1548ec91c782b2e3c323439a7145f_o2_featured_v2.jpg",
        title:"Chiyang Chinese"
        },

        {
        image:"https://b.zmtcdn.com/data/pictures/chains/1/19604881/ca1f4478ebd73e06018d8dfd7ad3f06c_o2_featured_v2.jpg",
        title:"Italian Pizza"
        },
    ];

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    }

    return <>
    <h1 className="text-xl font-semibold mb-4">
        Inspiration for your fisrt Order
    </h1>

    <div className="lg:hidden flex flex-wrap justify-between gap-3 md:gap-2 lg:gap-0">

        {
            categories.map((food) => (
                <DeliveryCategory {...food}/> 
            ) 
         )};

     
     
    </div>

    <div className="hidden lg:block">
     <Slider {...settings}>
     {
            categories.map((food) => (
                <DeliveryCategory {...food}/>
            ) 
         )}
     </Slider>
     </div>
    </>
}

export default DeliveryCarousel;