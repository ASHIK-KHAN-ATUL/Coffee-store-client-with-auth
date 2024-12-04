import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        console.log('Form Sign up ')

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        console.log({name, email, password})
        createUser(email, password)
        .then(res => {
            console.log(res.user)
            const createAt = res?.user?.metadata.creationTime

            const newUser = {name, email, createAt}
            // save new user to database
            fetch('http://localhost:5000/users', {
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
              console.log('User create to DB', data)
              if(data.insertedId){
                let timerInterval;
                  Swal.fire({
                    title: "Successfully Sign-up and information save in DB ",
                    html: "Close in <b></b> milliseconds.",
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                      Swal.showLoading();
                      const timer = Swal.getPopup().querySelector("b");
                      timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                      }, 100);
                    },
                    willClose: () => {
                      clearInterval(timerInterval);
                    }
                  }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                      console.log("I was closed by the timer");
                    }
                  });
              }
            })
        })
        .catch(error => {
            console.log('Error', error.message);
            Swal.fire({
              icon: "error",
              title: "Oops...Sign-up Unsuccessfull",
              text: error,
            });
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Sign up now!</h1>

          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
              </div>
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
              <p> New to coffee drinker <Link to={'/login'} className='text-red-400 font-semibold'>Login</Link>  </p>
            </form>
          </div>
        </div>
        </div>
    );
};

export default SignUp;