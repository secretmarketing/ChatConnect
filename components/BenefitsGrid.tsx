import React from 'react';

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: "ri-customer-service-2-line",
    title: "Reduce Response Time by 90%",
    description: "Instant automated responses ensure customers never wait, leading to higher satisfaction and more conversions."
  },
  {
    icon: "ri-money-dollar-circle-line",
    title: "Cut Customer Service Costs by 70%",
    description: "Automate repetitive inquiries and free up your team to focus on high-value activities that grow revenue."
  },
  {
    icon: "ri-smartphone-line",
    title: "Increase Sales by 40%",
    description: "Proactive messaging and instant support help convert more prospects into paying customers."
  },
  {
    icon: "ri-time-line",
    title: "Save 20+ Hours Weekly",
    description: "Automated workflows handle routine tasks, giving your team more time for strategic business growth."
  },
  {
    icon: "ri-global-line",
    title: "Scale Without Limits",
    description: "Handle thousands of conversations simultaneously without hiring additional support staff."
  },
  {
    icon: "ri-shield-check-line",
    title: "100% WhatsApp Compliant",
    description: "Built with official WhatsApp Business API ensuring your business stays compliant and professional."
  }
];

const BenefitCard = ({ icon, title, description }: Benefit) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
    <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
      <i className={`${icon} text-2xl w-6 h-6 flex items-center justify-center`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export const BenefitsGrid = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-semibold">
            You&apos;re not alone. These challenges are holding Malaysian businesses back.
          </p>
          <p className="text-xl text-blue-600 font-bold mt-2">
            But what if there was a way to communicate instantly, personally, and at scale?
          </p>
        </div>
      </div>
    </div>
  );
};