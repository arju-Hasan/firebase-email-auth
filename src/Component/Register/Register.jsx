import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/Firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Register = () => {
    const [success, setSuccess] = useState(false);
     const [Error, setError] = useState();
     const [showPassword, setShowPassword] = useState(false);

    const HandelSubmit = (event)=>{
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;

        console.log("register",  email, password, terms);

        setError("");
        setSuccess(false);

           if (!terms) {
            setError('Please accept Our terms and conditions.');
            return;}

          if (password.length < 6) {
            setError('Password should be 6 characters or longer');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            setError('At least one uppercase, one lowercase, one number, one special character');
            return;
        }

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
          <div className="form-control relative">
                    <label className="label">
                        Password
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        placeholder="password"
                        className="input input-bordered" required />
                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        className='btn btn-xs absolute right-5 top-7'>
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </button>
                    
                </div>
                <div className="form-control">
                    <label className="label justify-start cursor-pointer">
                        <input type="checkbox" name='terms' className="checkbox" />
                        <span className="label-text ml-2">Accept Our Terms And Condition.</span>
                    </label>
                </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        {
           success  && <p className='text-green-500'>Acount successfully</p>
        }
         {
        Error && <p className='text-red-500 p-4 text-center'>{Error}</p>
     }
     </form>
    
      </div>
      <p className='m-2'>
                Already have an account? Please <Link to="/login" className='text-blue-600 text-underline'>Login</Link>
            </p>
    </div>
  </div>
</div>
    );
};

export default Register;
