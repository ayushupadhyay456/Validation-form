import React,{useState} from 'react';
import SignupForm from './SignupForm';
import SignupFormSuccess from './SignupFormSuccess';


 const Form = () => {
     const [formIsSubmitted, setformIsSubmitted] = useState(false);
    const submitForm=()=>
    {
        setformIsSubmitted(true);
    }
    return (
        <div>
        {!formIsSubmitted ? (<SignupForm submitForm={submitForm}/>)
        :( <SignupFormSuccess/>
        )}
        
        </div>
    )
}
export default Form;