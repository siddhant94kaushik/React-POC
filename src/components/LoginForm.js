import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

function LoginForm() {

    const loginForm = useForm();
    const { register, control, handleSubmit, formState, reset } = loginForm
    const { errors } = formState

    const [usersEntered, setUsersEntered] = useState([]);

    const onSubmit = (data) => {

        // console.log("logged in", data)

        const userExists = usersEntered.some(
            (user) => user.email === data.email
        );

        if (userExists) {
            alert('User already exists');
        } else {
            setUsersEntered([...usersEntered, data]);
            reset();   
        }
    }
    console.log(usersEntered);

    return (
        <React.Fragment>
            <div className='main-container'>
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className='form-control-main'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name"
                                {...register("name",
                                    {
                                        required: "name is required",
                                        minLength: {
                                            value: 2,
                                            message: 'Name must be at least 2 characters long'
                                        },
                                    })} />
                        </div>
                        <p className='error'>{errors.name?.message}</p>
                    </div>

                    <div className='form-control-main'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email"
                                {...register("email",
                                    {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                            message: 'Invalid email format'
                                        }
                                    })} />
                        </div>
                        <p className='error'>{errors.email?.message}</p>
                    </div>

                    <div className='form-control-main'>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" {...register("password",
                                {
                                    required: "password is required",
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters long'
                                    },
                                    message: "password is required",
                                })} />
                        </div>
                        <p className='error'>{errors.password?.message}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <div className='User-info'>
                    {
                        usersEntered.map((entry,index) =>{
                            return (
                                <h3 key={index}> Welcome {entry.name} </h3>
                            )
                        } )
                    }
                </div>
                <DevTool control={control} />
            </div>
        </React.Fragment>
    )
}

export default LoginForm