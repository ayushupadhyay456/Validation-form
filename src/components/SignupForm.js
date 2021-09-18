import React,{useState,useEffect} from 'react'
import Validation from './Validation';

const SignupForm = ({submitForm}) => {

    const [values, setvalues] = useState(
        {
            fullname:"",
            email:"",
            password:""
        }
    );
    const [errors, seterrors] = useState({});
    const [dataIsCorrect, setdataIsCorrect] = useState(false);
    const handlechange=(e)=>
    {
        setvalues({
            ...values,
            [e.target.name]:e.target.value,
        })
    }
    const submithandler=(e)=>
    {
        e.preventDefault();
        seterrors(Validation(values));
        setdataIsCorrect(true);
    };
    useEffect(() => {
        if(Object.keys(errors).length==0&&dataIsCorrect){
        submitForm(true);
    }
},[errors]);
  
    return (
        <div className="container">
          <div className="app-wrapper">
              <h2 className="title">Create An Account</h2>
              
              <form className="form-wrapper">
                  <div className="name">
                      <label className="label">Full Name</label>
                      <input className="input" type="text" name="fullname" value={values.fullname} onChange={handlechange}/>
                      {errors.fullname && <p className="error">{errors.fullname}</p>}
                      </div>
                  <div className="email">
                      <label className="label">Email</label>
                      <input className="input" type="text" name="email" value={values.email} onChange={handlechange}/> 
                      {errors.email && <p className="error">{errors.email}</p>}
                      </div>
                  <div className="password">
                      <label className="label">Password</label>
                      <input className="input" type="password" name="password" value={values.password} onChange={handlechange}/>
                      {errors.password && <p className="error">{errors.password}</p>}         
                  </div>
                  <button className="submit" onClick={submithandler}>Sign Up</button>
                  <button className="submit" onClick={submithandler}>Login</button>
                
              </form>
              </div>
            </div>
    ) }  
export default SignupForm;
