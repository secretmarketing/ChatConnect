import React from 'react';
import Image from 'next/image';

export const HowItWorksSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How ChatConnect Pro Transforms Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven customer engagement that works around the clock
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center w-12 h-12 flex-shrink-0">
                <i className="ri-flashlight-line text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  ⚡ Instant, 24/7 Customer Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Say goodbye to missed inquiries! Our intelligent chatbots instantly answer FAQs,
                  provide order updates, and handle bookings around the clock, ensuring your customers
                  always get the support they need.
                </p>
                <div className="mt-3 text-sm text-blue-600 font-semibold">
                  Feature: Automated Chatbot Development &amp; Interactive Messaging Flows
                </div>
              </div>
            </div>
          </div>

          <div className="lg:order-first">
            <Image
              src="https://readdy.ai/api/search-image?query=Professional%20customer%20service%20representative%20using%20AI%20chatbot%20interface%20on%20smartphone%2C%20WhatsApp%20conversation%20showing%20automated%20responses%2C%20modern%20office%20setting%20with%20multiple%20screens%20displaying%20customer%20analytics%2C%20clean%20minimal%20design%20with%20green%20and%20blue%20interface%20elements%2C%20Malaysian%20business%20professional%20smiling%20while%20managing%20multiple%20customer%20chats%20effortlessly&width=600&height=400&seq=feature-1&orientation=landscape"
              alt="..."
              width={640}
              height={400}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};