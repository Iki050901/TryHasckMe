import React from 'react';
import { ArrowRight, Trophy, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Learn Cybersecurity with{' '}
            <span className="text-[#88cc14]">Hands-on Labs</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            TryHackMe is a free online platform for learning cyber security, using hands-on exercises and labs, all through your browser!
          </p>
          <Link
            to="/login"
            className="inline-flex items-center bg-[#88cc14] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#9be016] transition-colors"
          >
            Start Learning <ArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <Trophy className="h-12 w-12 text-[#88cc14] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Learn by Doing</h3>
            <p className="text-gray-400">
              Learn cybersecurity through hands-on exercises and labs
            </p>
          </div>
          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <Users className="h-12 w-12 text-[#88cc14] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-400">
              Join a community of people learning and teaching cybersecurity
            </p>
          </div>
          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <Target className="h-12 w-12 text-[#88cc14] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Guided Learning</h3>
            <p className="text-gray-400">
              Follow learning paths to achieve your cybersecurity goals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;