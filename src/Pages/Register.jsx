import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import DocumentTitle from '../Hook/DocumentTitle';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import SocialLogin from '../Components/SocialLogin';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            {/* <DocumentTitle title='Register | Job Box'></DocumentTitle> */}
            <div className="hero  min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-xl'>Create Your Account</h2>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" />
                            <label className="label">PhotoUrl</label>
                            <input type="url" className="input" placeholder="PhotoUrl" />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <div className='relative'>
                                <label className="label">Password</label>
                                <input required type={showPassword === false ? "password" : "text"} name='password' className="input" placeholder="Password" />
                                <span onClick={() => setShowPassword(!showPassword)} className='absolute top-9 right-7 text-xl transform -translate-y-1/2 z-40 text-gray-600 cursor-pointer '>{showPassword == false ? <FaRegEyeSlash /> : <FaEye />}</span>
                            </div>
                            <button className="btn bg-blue-400 text-white mt-4">Register</button>
                        </fieldset>
                        <p>You Have Any Account <Link to='/login' className='text-blue-500 font-bold'>Login</Link></p>

                   <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;