import joi from "joi";

//wont allow invalid data to get inside logic
//do not write validation inside mongoose
//do validation before hitting API logic

export const ValidateRestaurantCity= (restaurantCity) => {

    const Schema = joi.object({
       
        city: joi.string().required(), 
         });

    return Schema.validateAsync(restaurantCity);
};


export const ValidateRestaurantSearchString= (restaurantSearch) => {

    const Schema = joi.object({
       
        searchString: joi.string().required(), 
         });

    return Schema.validateAsync(restaurantSearch);
};



