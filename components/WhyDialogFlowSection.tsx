import React from 'react';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "ri-map-2-line",
    title: "Malaysian SME Specialists",
    description: "We understand the unique challenges and opportunities for businesses in Malaysia."
  },
  {
    icon: "ri-rocket-line",
    title: "Rapid, Customized Integration",
    description: "Get up and running fast with solutions tailored to your specific operations."
  },
  {
    icon: "ri-money-dollar-circle-line",
    title: "Affordable & Customizable",
    description: "Powerful automation doesn't have to break the bank. Our flexible pricing and templates fit your budget and needs."
  },
  {
    icon: "ri-customer-service-line",
    title: "Dedicated Local Support",
    description: "Beyond setup, enjoy daily WhatsApp support and a dedicated account manager to ensure your ongoing success."
  },
  {
    icon: "ri-file-list-3-line",
    title: "Pre-Built Templates",
    description: "Jumpstart your automation with industry-specific templates for e-commerce, spas, and clinics."
  },
  {
    icon: "ri-shield-check-line",
    title: "Proven Track Record",
    description: "Trusted by 500+ Malaysian businesses with 98% satisfaction rate and measurable results."
  }
];

const FeatureCard = ({ icon, title, description }: Feature) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-3 rounded-lg inline-block mb-4">
      <i className={`${icon} text-2xl w-6 h-6 flex items-center justify-center`}></i>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-blue-100 leading-relaxed">{description}</p>
  </div>
);

export const WhyDialogFlowSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

