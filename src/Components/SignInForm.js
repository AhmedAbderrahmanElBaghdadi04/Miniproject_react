import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('votre_backend/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      console.log('Authentication successful');
    } catch (error) {
      console.error('Authentication error:', error.message);
      setError('Authentication failed. Please check your credentials.');
    }
  };

  return (

    <div className="form-container">
      <Navbar />
      <div className="logo-container">Welcome Back!</div>
      <div className="social-buttons">
        <button className="social-button facebook">
          <span>Sign in with Facebook</span>
        </button>
        <button className="social-button apple">
          <span>Sign in with Apple</span>
        </button>
      </div>

      <div className="line"></div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            required
            placeholder="Enter your email"
            name="email"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            placeholder="Enter your password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="form-submit-btn">
          Sign In
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <a className="forgot-password-link link" href="#">
        Forgot Password
      </a>

      <p className="signup-link">
        Don't have an account?
        <a className="signup-link link" href="#">
          {' '}
          Sign up now
        </a>
      </p>
    </div>
  );
};

export default SignInForm;
