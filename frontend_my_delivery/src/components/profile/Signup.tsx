import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match!");
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/v1/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstname, lastname, email, password }),
            });

            const result = await response.json();
            if (response.ok) {
                // alert('Signin successful! Token: ' + result.token);
                // Optionally store the token in localStorage
                localStorage.setItem('token', result.token);
                navigate('/signin');
                // Redirect or perform further actions
            } else {
                alert('User not found!');
            }
        }


            // const response = await fetch('http://localhost:3000/api_users/v1/signup', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ firstName, lastName, email, password }),
            // });

            // const result = await response.json();
            // if (response.ok) {
            //     setSuccessMessage(result.message);
            //     // Optionally redirect to signin or another page
            // } else {
            //     setErrorMessage(result.message || 'An error occurred.');
            // }
         catch (error) {
            // console.error('Error:', error);
            setErrorMessage('An error occurred while signing up.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
                <div className="text-center mt-3">
                    <span>Already registered? </span>
                    <a href="/signin">Sign In</a>
                </div>
                <div className="text-center mt-2">
                    <a href="/forgot-password">Forgot password?</a>
                </div>
            </div>
        </div>
    );
}
