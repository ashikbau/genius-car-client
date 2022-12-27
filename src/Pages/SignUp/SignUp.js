
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser,providerLogin} = useContext(authContext);
    const provider = new GoogleAuthProvider();
    const [error, setError] = useState('');

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(err => {
            console.error(err)
            setError(error.message)
        });

    }

    const handleGoogleSignIn = ()=>{
        providerLogin(provider)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>console.error(error))

    }


    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                
                <img className='w-3/4' src={img} alt=''></img>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">   Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className=' btn btn-primary' type="submit" value="Sign Up" />
                        
                    </div>
                    <div className="text-danger">
                {error}
            </div>
                </form>
               <p className='text-center'>Already have an account?<Link className='text-orange-600 font-bold ' to='/login'>LogIn</Link></p>

               <div className='mx-auto' >
                        <button onClick={handleGoogleSignIn}  className=' btn btn-primary'>Google Login</button>
                        
            </div>
            </div>
            
        </div>
    </div>
    );
};
export default SignUp;