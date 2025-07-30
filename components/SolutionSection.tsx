import React from 'react';

export const SolutionSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-green-600 to-blue-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Enter ChatConnect Pro
          </h2>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            Your AI-Powered WhatsApp Business Growth Engine
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
            <p className="text-lg md:text-xl leading-relaxed">
              <strong>ChatConnect Pro by DialogFlow</strong> is the cutting-edge WhatsApp Business API solution
              designed specifically to help Malaysian e-commerce stores, spas, and clinics automate their
              customer interactions, drive sales, and operate with unparalleled efficiency.
            </p>
            <p className="text-lg mt-4">
              We don&apos;t just give you a tool; we provide a <span className="text-yellow-400 font-bold">customized,
              affordable, and easy-to-implement</span> solution tailored to your unique business needs.
            </p>
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-full text-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            Transform Your Business Now
          </button>
        </div>
      </div>
    </div>
  );
};

