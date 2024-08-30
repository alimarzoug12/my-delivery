import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserlastName,setUserfirstName } from '../../slices/userSlice';
import axios from 'axios';

export default function Signin() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:4000/api/v1/login',
               { email, password }
            )
                .then((response) => {
                    console.log(response);
                    if (response.statusText==="OK") {
                        
                        console.log("🚀 ~ ------------okkk-----------",response.data.data.firstname)
                        dispatch(setUserfirstName(response.data.data.firstname))
                        dispatch(setUserlastName(response.data.data.lastname))
                        navigate('/');
                    } else {
                        alert('User not found!');
                    }
                }, (error) => {
                    console.log(error);
                });
            // await fetch('http://localhost:4000/api/v1/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ email, password }),
            // }).then((response: any) => {
            //     console.log("🚀 ~ handleSubmit ~ response:", response.data)
            //     if (response.ok) {

            //         // alert('Signin successful! Token: ' + result.token);
            //         // Optionally store the token in localStorage
            //         // localStorage.setItem('token', result.token);
            //         navigate('/');
            //         // Redirect or perform further actions
            //     } else {
            //         alert('User not found!');
            //     }
            // })
  

            // if (response.ok) {
            //     console.log("🚀 ~ handleSubmit ~ response:", response.data)

            //     // alert('Signin successful! Token: ' + result.token);
            //     // Optionally store the token in localStorage
            //     localStorage.setItem('token', result.token);
            //     navigate('/');
            //     // Redirect or perform further actions
            // } else {
            //     alert('User not found!');
            // }
        } catch (error: any) {
            console.log('Error:', error);
            setErrorMessage('An error occurred while signing in.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Sign In</h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
                <div className="text-center mt-3">
                    <span>Don't have an account? </span>
                    <a href="/signup">Sign Up</a>
                </div>
                <div className="text-center mt-2">
                    <a href="/forgot-password">Forgot password?</a>
                </div>
            </div>
        </div>
    );
}
