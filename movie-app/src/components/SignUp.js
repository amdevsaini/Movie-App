// SignUp.js
import { useState } from 'react';

const SignUp = ({ handleLogin }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded p-6">
      <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border rounded px-4 py-2 mb-4"
          type="email"
          placeholder="Enter your email to create an account"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;