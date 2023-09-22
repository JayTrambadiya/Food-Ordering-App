import * as Yup from "yup"

const phoneRegExp="const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/";

const validate = Yup.object().shape({
    // phoneNumber:Yup.string().required("required")   .matches(phoneRegExp,"invalid phonenumber"),
    
    name:Yup.string().required("required").max(20,"name should be maximum length of 20 characters").min(2,"name is too short!!"),

    email:Yup.string().required("required").email("invalid email"),
    
});

export default validate
