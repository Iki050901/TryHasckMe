import React from 'react';
import { Building2, Users, Briefcase, Shield } from 'lucide-react';

const Business = () => {
  return (
    <div className="min-h-screen bg-[#161616] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">TryHackMe for Business</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Empower your team with hands-on cybersecurity training that delivers real results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Building2,
              title: "Enterprise Training",
              description: "Custom training paths aligned with your organization's needs"
            },
            {
              icon: Users,
              title: "Team Management",
              description: "Monitor progress and assess team performance"
            },
            {
              icon: Briefcase,
              title: "Industry Compliance",
              description: "Meet security compliance requirements with structured training"
            },
            {
              icon: Shield,
              title: "Skill Assessment",
              description: "Evaluate and certify your team's security capabilities"
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-[#1c1c1c] p-6 rounded-lg">
                <Icon className="h-12 w-12 text-[#88cc14] mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#1c1c1c] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Business Plans</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                <div>
                  <h3 className="font-semibold">Team Plan</h3>
                  <p className="text-gray-400">For small teams up to 10 users</p>
                </div>
                <button className="bg-[#88cc14] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#9be016] transition-colors">
                  Contact Sales
                </button>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                <div>
                  <h3 className="font-semibold">Enterprise Plan</h3>
                  <p className="text-gray-400">For organizations with 10+ users</p>
                </div>
                <button className="bg-[#88cc14] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#9be016] transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#1c1c1c] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Request a Demo</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-[#161616] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#88cc14]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 bg-[#161616] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#88cc14]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#88cc14] text-black py-2 rounded-md font -md font-semibold hover:bg-[#9be016] transition-colors"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>

        <div className="bg-[#1c1c1c] p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Microsoft",
              "Google",
              "Amazon",
              "IBM",
            ].map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className="text-xl font-bold text-gray-400">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;