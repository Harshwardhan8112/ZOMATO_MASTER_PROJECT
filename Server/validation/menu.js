import joi from "joi";

//wont allow invalid data to get inside logic
//do not write validation inside mongoose
//do validation before hitting API logic

export const ValidateRestaurantId = (resId) => {

    const Schema = joi.object({
        _id: joi.string().required(), 
        });

    return Schema.validateAsync(resId);
};

export const ValidateCategory = (category) => {

    const Schema = joi.object({
        
        email: joi.string().email().required(),
        password: joi.string().min(5).required(),
        
    });

    return Schema.validateAsync(category);
};