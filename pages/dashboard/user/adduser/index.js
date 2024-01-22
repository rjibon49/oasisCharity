import Head from 'next/head';
import SidebarLayout from '../../../../components/SidebarLayout';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

const Index = () => {

    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/users', formData);
      
          if (response && response.status && response.status >= 200 && response.status < 300) {
            setFormData({
              name: '',
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
              role: 'patient', // Reset the role to 'Patient' after successful registration
            });
            // Other actions after successful registration
            toast.success('Registration Successful');
          } else {
            handleRegistrationError(response);
          }
        } catch (error) {
          handleRegistrationError(error.response);
        }
      };
      
      const handleRegistrationError = (response) => {
        if (response.status === 409) {
          toast.error('This email or Username already exists');
        } else if (response.status === 400) {
          toast.error('Passwords do not match');
        } else {
          toast.error('Registration failed');
        }
      };
    

    return (
        <>
            <Head>
                <title>Add User</title>
                <meta name="description" content="Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <SidebarLayout>
                    <div className='my-5'>
                        <div>
                            <form className="row g-4 p-5" onSubmit={handleSubmit}>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="name" className='text24 mb-2'>Full Name</label>
                                    <input type="text" className="form-control" id='name' placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} />
                                    <i className="fa-regular fa-user iconPosition"></i>
                                </div>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="userName" className='text24 mb-2'>Username</label>
                                    <input type="text" className="form-control" id='userName' placeholder="username" name="username" value={formData.username} onChange={handleChange} />
                                    <i className="fa-regular fa-user iconPosition"></i>
                                </div>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="emailAddress" className='text24 mb-2'>Email Address</label>
                                    <input type="email" className="form-control" id='emailAddress'  placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} />
                                    <i className="far fa-envelope iconPosition"></i>
                                </div>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="password" className='text24 mb-2'>Password</label>
                                    <div className="input-group">
                                        <input
                                        type='password'
                                        className="form-control"
                                        id='password'
                                        placeholder="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 position-relative">
                                    <label htmlFor="confirmPassword" className='text24 mb-2'>Confirm Password</label>
                                    <div className="input-group">
                                        <input
                                        type= 'password'
                                        className="form-control"
                                        id='confirmPassword'
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="userRole" className='text24 mb-2'>Select Role</label>
                                    <select
                                        id="userRole"
                                        className="form-select"
                                        name="role"
                                        defaultValue={formData.role}
                                        onChange={handleChange}
                                    >
                                       <option value="Patient">Patient</option>
                                        <option value="Doctor">Doctor</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="loginButton">Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <ToastContainer />
                </SidebarLayout>
            </div>
        </>
    );
};

export default Index;