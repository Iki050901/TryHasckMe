import React from 'react';
import { BookOpen, Code, Shield, Terminal } from 'lucide-react';

const Learn = () => {
  return (
    <div className="min-h-screen bg-[#161616] text-white p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Learning Paths</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <BookOpen className="h-12 w-12 text-[#88cc14] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Complete Beginner</h2>
            <p className="text-gray-400 mb-4">
              Start your journey in cyber security with no prior knowledge required
            </p>
            <button className="bg-[#88cc14] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#9be016] transition-colors">
              Start Path
            </button>
          </div>

          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <Code className="h-12 w-12 text-[#88cc14] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Web Fundamentals</h2>
            <p className="text-gray-400 mb-4">
              Learn how web applications work and how to exploit them
            </p>
            <button className="bg-[#88cc14] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#9be016] transition-colors">
              Start Path
            </button>
          </div>

          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <Terminal className="h-12 w-12 text-[#88cc14] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Offensive Pentesting</h2>
            <p className="text-gray-400 mb-4">
              Learn advanced penetration testing techniques
            </p>
            <button className="bg-[#88cc14] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#9be016] transition-colors">
              Start Path
            </button>
          </div>

          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <Shield className="h-12 w-12 text-[#88cc14] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Defensive Security</h2>
            <p className="text-gray-400 mb-4">
              Learn how to defend against cyber attacks
            </p>
            <button className="bg-[#88cc14] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#9be016] transition-colors">
              Start Path
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;