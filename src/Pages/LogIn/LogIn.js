import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import {  Link, useLocation, useNavigate, } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { setAuthToken } from '../../contexts/api/auth';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {
    const {login,providerLogin} = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const [error,setError] = useState('');


    const from = location.state?.from?.pathname || '/';


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result =>{
            const user = result.user;
            // console.log(user)
            setError('')
            form.reset()
            
            const currentUser = {
                email : user.email
            }

            // get token
            fetch('http://localhost:5000/jwt',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data =>{
                // console.log(data)

                localStorage.setItem('genius-token',data.token)
                navigate(from, { replace: true });
            })
            
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })

    }

    const handleGoogleSignIn = ()=>{
        providerLogin(provider)
        .then(result=>{
            const user = result.user;
            console.log(user)
            setAuthToken(user)
            navigate(from, { replace: true });
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
                <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span  className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className=' btn btn-primary' type="submit" value="Login" />
                            
                        </div>
                        <div className="text-danger">
                {error}
            </div>
                    </form>
                    <div className='mx-auto' >
                        <button onClick={handleGoogleSignIn}  className=' btn btn-primary'>Google Login</button>
                        
            </div>
                    <p className='text-center'>New to Genius car <Link className='text-orange-600 font-bold ' to='/signup'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;