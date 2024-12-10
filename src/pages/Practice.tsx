import React from 'react';
import { Target, Server, Lock, Database } from 'lucide-react';

const Practice = () => {
  return (
    <div className="min-h-screen bg-[#161616] text-white p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Practice Labs</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Basic Penetration Testing",
              icon: Target,
              difficulty: "Easy",
              users: "2.5k",
              description: "Learn the basics of penetration testing with this beginner-friendly lab."
            },
            {
              title: "Network Security",
              icon: Server,
              difficulty: "Medium",
              users: "1.8k",
              description: "Practice network security concepts and techniques."
            },
            {
              title: "Web Application Security",
              icon: Lock,
              difficulty: "Hard",
              users: "1.2k",
              description: "Test your skills in securing web applications."
            },
            {
              title: "SQL Injection",
              icon: Database,
              difficulty: "Medium",
              users: "2.1k",
              description: "Practice SQL injection techniques and prevention."
            }
          ].map((lab, index) => {
            const Icon = lab.icon;
            return (
              <div key={index} className="bg-[#1c1c1c] p-6 rounded-lg">
                <Icon className="h-12 w-12 text-[#88cc14] mb-4" />
                <h2 className="text-2xl font-bold mb-2">{lab.title}</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-2 py-1 rounded text-sm ${
                    lab.difficulty === "Easy" ? "bg-green-900 text-green-300" :
                    lab.difficulty === "Medium" ? "bg-yellow-900 text-yellow-300" :
                    "bg-red-900 text-red-300"
                  }`}>
                    {lab.difficulty}
                  </span>
                  <span className="text-gray-400">{lab.users} users</span>
                </div>
                <p className="text-gray-400 mb-4">{lab.description}</p>
                <button className="bg-[#88cc14] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#9be016] transition-colors w-full">
                  Start Lab
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Practice;