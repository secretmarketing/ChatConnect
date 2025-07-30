// C:\Users\hmawa\Downloads\ChatConnect site\components\ProblemSection.tsx
import React from 'react';

type Problem = {
  icon: string;
  title: string;
  description: string;
};

// Sub-component for individual problem cards
const ProblemCard = ({ icon, title, description }: Problem) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

// Main ProblemSection component, exported as a named export
export function ProblemSection() { // No 'problems' prop expected here
  // Define the problems data directly within this component
  const problemsData: Problem[] = [
    {
      icon: "💬",
      title: "Overwhelming WhatsApp Messages",
      description: "Endless messages overwhelming your sales and support teams, leading to slow responses and frustrated customers"
    },
    {
      icon: "🌙",
      title: "24/7 Response Pressure",
      description: "Valuable inquiries slipping through the cracks because your team can't respond around the clock, costing you missed opportunities"
    },
    {
      icon: "💰",
      title: "High Customer Service Costs",
      description: "Spending a fortune on manpower just to answer repetitive questions, leading to unsustainable customer service expenses"
    },
    {
      icon: "⏰",
      title: "Inefficient Human Resources",
      description: "Your talented team stuck on mundane tasks instead of focusing on what truly grows your business"
    },
    {
      icon: "📧",
      title: "Low Marketing Engagement",
      description: "Your emails and SMS just not getting the attention your offers deserve, resulting in poor conversion rates"
    },
    {
      icon: "📉",
      title: "Lost Business Opportunities",
      description: "Competitors capturing your potential customers because they respond faster and provide better customer experience"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Are You Tired Of...
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These common challenges that are costing Malaysian businesses thousands in lost revenue every month
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemsData.map((problem) => ( // Use problemsData here
            <ProblemCard key={problem.title} {...problem} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p>You&apos;re not alone. These challenges are holding Malaysian businesses back.</p>
          <p className="text-xl text-blue-600 font-bold mt-2">
            But what if there was a way to communicate instantly, personally, and at scale?
          </p>
        </div>
      </div>
    </div>
  );
}