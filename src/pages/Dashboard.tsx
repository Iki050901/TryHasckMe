import React from 'react';
import { Activity, Book, Target, Trophy } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#161616] text-white p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <Activity className="h-8 w-8 text-[#88cc14] mb-2" />
            <h3 className="font-semibold">Progress</h3>
            <p className="text-2xl font-bold">45%</p>
          </div>
          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <Book className="h-8 w-8 text-[#88cc14] mb-2" />
            <h3 className="font-semibold">Completed Rooms</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <Target className="h-8 w-8 text-[#88cc14] mb-2" />
            <h3 className="font-semibold">Current Streak</h3>
            <p className="text-2xl font-bold">7 days</p>
          </div>
          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <Trophy className="h-8 w-8 text-[#88cc14] mb-2" />
            <h3 className="font-semibold">Badges Earned</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Completed "Introduction to Cyber Security"</span>
                <span className="text-gray-400">2 days ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Started "Web Fundamentals"</span>
                <span className="text-gray-400">3 days ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Earned "Quick Learner" badge</span>
                <span className="text-gray-400">5 days ago</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Recommended Paths</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Complete Beginner</span>
                <button className="text-[#88cc14] hover:underline">Start</button>
              </div>
              <div className="flex items-center justify-between">
                <span>Web Fundamentals</span>
                <button className="text-[#88cc14] hover:underline">Continue</button>
              </div>
              <div className="flex items-center justify-between">
                <span>Jr Penetration Tester</span>
                <button className="text-[#88cc14] hover:underline">Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;