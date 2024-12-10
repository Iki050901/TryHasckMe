import React from 'react';
import { GamepadIcon, Trophy, Users, Clock } from 'lucide-react';

const Games = () => {
  return (
    <div className="min-h-screen bg-[#161616] text-white p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Security Games</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Capture The Flag",
              icon: Trophy,
              players: "1,234",
              time: "30 mins",
              description: "Find and capture flags by exploiting vulnerabilities."
            },
            {
              title: "King of the Hill",
              icon: GamepadIcon,
              players: "856",
              time: "45 mins",
              description: "Maintain control of a machine while others try to take it."
            },
            {
              title: "Hack The Box",
              icon: Users,
              players: "2,145",
              time: "60 mins",
              description: "Complete challenges in a competitive environment."
            }
          ].map((game, index) => {
            const Icon = game.icon;
            return (
              <div key={index} className="bg-[#1c1c1c] p-6 rounded-lg">
                <Icon className="h-12 w-12 text-[#88cc14] mb-4" />
                <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-gray-400">{game.players}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-gray-400">{game.time}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <button className="bg-[#88cc14] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#9be016] transition-colors w-full">
                  Play Now
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Leaderboard</h2>
          <div className="bg-[#1c1c1c] rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#242424]">
                  <th className="px-6 py-3 text-left">Rank</th>
                  <th className="px-6 py-3 text-left">Player</th>
                  <th className="px-6 py-3 text-left">Score</th>
                  <th className="px-6 py-3 text-left">Games Won</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, name: "CyberNinja", score: "2,456", wins: 42 },
                  { rank: 2, name: "HackMaster", score: "2,123", wins: 38 },
                  { rank: 3, name: "SecurityPro", score: "1,987", wins: 35 },
                  { rank: 4, name: "CodeBreaker", score: "1,854", wins: 31 },
                  { rank: 5, name: "ByteHunter", score: "1,765", wins: 29 }
                ].map((player) => (
                  <tr key={player.rank} className="border-t border-[#2a2a2a] hover:bg-[#242424]">
                    <td className="px-6 py-4">{player.rank}</td>
                    <td className="px-6 py-4">{player.name}</td>
                    <td className="px-6 py-4">{player.score}</td>
                    <td className="px-6 py-4">{player.wins}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;