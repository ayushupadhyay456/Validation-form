import React from 'react'

const Validation = (values) => {
    let errors={};
    if(!values.fullname)
    {
        errors.fullname="Name is required";

    }
    if(!values.email)
    {
    errors.email="Email is Empty";
    }
    else if(!/\S+@\S+\.\S+/.test(values.email))
    {
        errors.email="Email is Invalid."
    }
    if(!values.password)
    {
        errors.password="Password is required";

    }
    else if(values.password.length<5)
    {
        errors.password="Password must contain more than 5 Characters";
    }

    return errors;
};

export default Validation
