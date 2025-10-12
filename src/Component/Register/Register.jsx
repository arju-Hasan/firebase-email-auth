import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/Firebase.init';

const Register = () => {
    const [success, setSuccess] = useState(false);
     const [Error, setError] = useState();

    const HandelSubmit = (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log("register",  email, password);

        setError("");
        setSuccess(false);

        createUserWithEmailAndPassword( auth, email, password)
        .then(result=>{
            console.log("user resutl" , result.user);
            setSuccess(true)
            event.target.reset()

        } )
        .catch(error=>{
            console.log(error.message);
            setError(error.message)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
     <form onSubmit={HandelSubmit}>
           <fieldset className="fieldset">
          <label className="label" >Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        {
           success  && <p className='text-green-500'>success</p>
        }
         {
        Error && <p className='text-red-500 p-4 text-center'>{Error}</p>
     }
     </form>
    
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;