import React from 'react';
import { FaUsers, FaBook, FaComments, FaChartLine } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <Icon className="text-4xl text-green-600 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: FaUsers,
      title: "Expert Network",
      description: "Connect with agricultural experts, researchers, and experienced farmers worldwide."
    },
    {
      icon: FaBook,
      title: "Knowledge Base",
      description: "Access a vast library of research papers, best practices, and farming techniques."
    },
    {
      icon: FaComments,
      title: "Community Forums",
      description: "Engage in discussions, ask questions, and share experiences with the community."
    },
    {
      icon: FaChartLine,
      title: "Market Insights",
      description: "Stay updated with agricultural market trends, prices, and demand forecasts."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Empowering Agricultural Innovation
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Our platform provides the tools and connections you need to succeed in modern agriculture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;