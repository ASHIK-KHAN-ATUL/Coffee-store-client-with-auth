import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

  const {signInUser} = useContext(AuthContext)

  const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(res => {
          console.log(res.user)

          // Update last login time
          const lastSignInTime = res.user?.metadata?.lastSignInTime;
          const loginInfo = {email , lastSignInTime};

          fetch(`http://localhost:5000/users`, {
            method:'PATCH',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(loginInfo)
          })
          .then(res => res.json())
          .then(data => {
            console.log('Signin info updated in DB', data)
          })
        })
        .catch( error => {
          console.log(error)
        })

    }

    return (
       <div>


        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
              <p>New to coffee drinker <Link to={'/signup'} className='text-red-400 font-semibold'>Sign-up</Link>  </p>
            </form>
          </div>
        </div>
        </div>
       </div>
    );
};

export default Login;