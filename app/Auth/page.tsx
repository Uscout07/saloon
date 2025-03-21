'use client';
import { useState } from 'react';
import { createClient } from '../../utils/supabase/client';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const AuthForm = ({ type }: { type: 'login' | 'signup' | 'forgot' }) => {
  const supabase = createClient();
  const [authType, setAuthType] = useState<'login' | 'signup' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (type === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage(error.message);
    } else if (type === 'signup') {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setMessage(error.message);
    } else if (type === 'forgot') {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (!error) setMessage('Check your email for reset link');
    }
    setLoading(false);
  };

  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) setMessage(error.message);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'> 
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
    
    <h2 className="text-2xl font-semibold mb-4">
      {authType === 'login' ? 'Welcome Back' : authType === 'signup' ? 'Create Account' : 'Reset Password'}
    </h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
        className="w-full px-4 py-3 border rounded-lg"
      />
      {authType !== 'forgot' && (
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          className="w-full px-4 py-3 border rounded-lg"
        />
      )}
      <button 
        type="submit" 
        disabled={loading} 
        className="w-full bg-neutral-900 text-white py-3 rounded-lg hover:bg-neutral-700 transition"
      >
        {loading ? 'Processing...' : authType === 'login' ? 'Login' : authType === 'signup' ? 'Sign Up' : 'Send Reset Link'}
      </button>
    </form>
    <div className="flex justify-center space-x-4 my-4">
      <button onClick={() => handleSocialLogin('google')} className="p-3 border rounded-full hover:bg-gray-100">
        <FcGoogle size={24} />
      </button>
     
    </div>
    <div className="flex justify-center space-x-4 mb-4">
    {authType !== 'login' && (
          <button onClick={() => setAuthType('login')} className="px-4 py-2 bg-gray-200 rounded-lg">Login</button>
        )}
        {authType !== 'signup' && (
          <button onClick={() => setAuthType('signup')} className="px-4 py-2 bg-gray-200 rounded-lg">Sign Up</button>
        )}
        {authType !== 'forgot' && (
          <button onClick={() => setAuthType('forgot')} className="px-4 py-2 bg-gray-200 rounded-lg">Forgot Password</button>
        )}
    </div>
    {message && <p className="text-red-500 mt-2">{message}</p>}
  </div>
  </div>
);
};

export default AuthForm;
