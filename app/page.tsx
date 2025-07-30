
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20business%20office%20with%20team%20members%20using%20smartphones%20and%20laptops%20for%20customer%20service%2C%20WhatsApp%20chat%20bubbles%20floating%20in%20air%2C%20professional%20Malaysian%20office%20environment%20with%20glass%20windows%2C%20clean%20minimal%20design%2C%20bright%20natural%20lighting%2C%20people%20smiling%20while%20working%20on%20digital%20customer%20support%2C%20modern%20technology%20workspace%20with%20green%20and%20blue%20accent%20colors&width=1920&height=1080&seq=hero-main&orientation=landscape')`
        }}
      >
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="text-center text-white">
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
              🔥 REVOLUTIONIZE YOUR CUSTOMER ENGAGEMENT! 🔥
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Stop Losing Sales & Appointments to 
              <span className="text-yellow-400"> Missed Messages!</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your WhatsApp into a 24/7 sales and support powerhouse with ChatConnect Pro - 
              The AI solution that Malaysian businesses trust to automate customer interactions and boost revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Get Started FREE Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 whitespace-nowrap">
                Watch Demo Video
              </button>
            </div>
            
            <div className="mt-8 text-sm opacity-90">
              ✅ No Setup Fees • ✅ 30-Day Free Trial • ✅ Cancel Anytime
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
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
            {[ 
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
            ].map((problem, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 font-semibold">
              You're not alone. These challenges are holding Malaysian businesses back.
            </p>
            <p className="text-xl text-blue-600 font-bold mt-2">
              But what if there was a way to communicate instantly, personally, and at scale?
            </p>
          </div>
        </div>
      </div>

      {/* Solution Section */}
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
                We don't just give you a tool; we provide a <span className="text-yellow-400 font-bold">customized, 
                affordable, and easy-to-implement</span> solution tailored to your unique business needs.
              </p>
            </div>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-full text-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              Transform Your Business Now
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
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
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center w-12 h-12">
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
                      Feature: Automated Chatbot Development & Interactive Messaging Flows
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:order-first">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20customer%20service%20representative%20using%20AI%20chatbot%20interface%20on%20smartphone%2C%20WhatsApp%20conversation%20showing%20automated%20responses%2C%20modern%20office%20setting%20with%20multiple%20screens%20displaying%20customer%20analytics%2C%20clean%20minimal%20design%20with%20green%20and%20blue%20interface%20elements%2C%20Malaysian%20business%20professional%20smiling%20while%20managing%20multiple%20customer%20chats%20effortlessly&width=600&height=400&seq=feature-1&orientation=landscape"
                alt="24/7 Customer Support"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
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
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-2xl w-6 h-6 flex items-center justify-center`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Results. Real Malaysian Businesses. Real Growth.
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Don't just take our word for it. See how ChatConnect Pro is already making an impact:
            </p>
            <p className="text-lg text-gray-600">
              Trusted by 500+ Malaysian businesses across all industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* E-commerce Testimonials */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-blue-600 mb-3">E-COMMERCE SUCCESS</div>
              <p className="text-gray-700 italic mb-4">"Before ChatConnect Pro, we were swamped. Now, we've reduced customer service response time by 70% during peak hours, directly leading to a 20% increase in repeat orders via WhatsApp! It's been a game-changer."</p>
              <div className="font-bold text-gray-900">TechMart Electronics</div>
              <div className="text-green-600 font-semibold text-sm mt-2">70% faster responses • 20% more repeat orders</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-green-600 mb-3">SPA & CLINIC SUCCESS</div>
              <p className="text-gray-700 italic mb-4">"Our sales team used to be overwhelmed. With DialogFlow, our leads are now responded to 100% 24/7, leading to a 40% increase in appointments made via WhatsApp. This is truly transformative!"</p>
              <div className="font-bold text-gray-900">Bella Spa Kuala Lumpur</div>
              <div className="text-green-600 font-semibold text-sm mt-2">100% lead response • 40% more appointments</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-purple-600 mb-3">COST SAVINGS SUCCESS</div>
              <p className="text-gray-700 italic mb-4">"ChatConnect Pro helped us cut our WhatsApp sales team hiring cost by 50%. We now only need 1-2 sales reps to push customers who didn't make appointments/paid, focusing their efforts where it matters most!"</p>
              <div className="font-bold text-gray-900">Premium Health Clinic</div>
              <div className="text-green-600 font-semibold text-sm mt-2">50% cost reduction • Optimized team focus</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-orange-600 mb-3">E-COMMERCE GROWTH</div>
              <p className="text-gray-700 italic mb-4">"The automated follow-ups and product recommendations generated an extra RM 50K per month! Our conversion rate improved dramatically."</p>
              <div className="font-bold text-gray-900">Gourmet Kitchen Supplies</div>
              <div className="text-green-600 font-semibold text-sm mt-2">RM 50,000 additional monthly revenue</div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-teal-600 mb-3">BEAUTY & WELLNESS</div>
              <p className="text-gray-700 italic mb-4">"ChatConnect Pro transformed our booking process. We now handle 3x more appointments with the same staff size! Customer satisfaction is through the roof."</p>
              <div className="font-bold text-gray-900">Luxe Beauty Salon</div>
              <div className="text-green-600 font-semibold text-sm mt-2">300% increase in appointment bookings</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-yellow-600 mb-3">SUPPORT EFFICIENCY</div>
              <p className="text-gray-700 italic mb-4">"Our customers get instant answers 24/7. Support tickets dropped by 85% and sales increased by 45%. The ROI is incredible!"</p>
              <div className="font-bold text-gray-900">Digital Solutions Malaysia</div>
              <div className="text-green-600 font-semibold text-sm mt-2">85% reduction in support tickets • 45% sales increase</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="font-bold text-3xl text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="font-bold text-3xl text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="font-bold text-3xl text-purple-600">70%</div>
                  <div className="text-sm text-gray-600">Avg. Cost Reduction</div>
                </div>
                <div>
                  <div className="font-bold text-3xl text-orange-600">40%</div>
                  <div className="text-sm text-gray-600">Avg. Sales Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why DialogFlow Section */}
      <div className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why DialogFlow is Your Trusted Partner for WABA Automation
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We don't just provide software - we deliver complete solutions tailored for Malaysian businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
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
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-3 rounded-lg inline-block mb-4">
                  <i className={`${feature.icon} text-2xl w-6 h-6 flex items-center justify-center`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Investment in Smarter Business Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing that scales with your business success
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-xl mb-12">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">ChatConnect Pro Pricing</h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                    <i className="ri-vip-crown-line text-3xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Platform Access</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">RM 300</div>
                  <div className="text-gray-600">per month</div>
                  <div className="text-sm text-gray-500 mt-2">Full automation platform</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
                    <i className="ri-chat-3-line text-3xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Conversation Fees</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-2">Per Message</div>
                  <div className="text-gray-600">as per Meta pricing</div>
                  <div className="text-sm text-gray-500 mt-2">Pay only for what you use</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-500 text-white p-4 rounded-lg mb-4">
                    <i className="ri-building-line text-3xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Custom Quotes</h4>
                  <div className="text-2xl font-bold text-purple-600 mb-2">Enterprise</div>
                  <div className="text-gray-600">for high-volume</div>
                  <div className="text-sm text-gray-500 mt-2">Tailored solutions</div>
                </div>
              </div>
            </div>
            
            {/* Special Offer */}
            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white text-center mb-12">
              <div className="text-2xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold mb-4">Exclusive Introductory Offer for New Clients!</h3>
              <p className="text-xl mb-6">
                Sign up for our annual plan today and get the first 3 months of messaging fees WAIVED! 
                (Up to 1,000 conversations/month)
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                <p className="text-lg">
                  This is a limited-time offer to help you experience the full power of ChatConnect Pro 
                  with minimal upfront messaging costs.
                </p>
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Claim Your Offer Now!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ChatConnect Pro
            </p>
          </div>
          
          <div className="space-y-6">
            {[ 
              {
                question: "How quickly can I get ChatConnect Pro up and running?",
                answer: "Our rapid integration process typically takes 15-30 minutes for basic setup. Our Malaysian support team will guide you through the entire process, and you can start automating customer conversations on the same day."
              },
              {
                question: "Do I need technical knowledge to use ChatConnect Pro?",
                answer: "Not at all! ChatConnect Pro is designed for business owners, not developers. We provide pre-built templates for e-commerce, spas, and clinics, plus our dedicated account manager helps with setup and ongoing optimization."
              },
              {
                question: "What are the WhatsApp conversation fees?",
                answer: "Conversation fees follow Meta's official WhatsApp Business API pricing. The cost varies based on conversation type (business-initiated vs customer-initiated) and your country. We provide transparent pricing with no hidden fees."
              },
              {
                question: "Can I customize the automated messages for my business?",
                answer: "Absolutely! Our platform is highly customizable. You can create custom workflows, personalize message templates, set up specific responses for your products/services, and even integrate with your existing systems."
              },
              {
                question: "Is there a contract or can I cancel anytime?",
                answer: "We offer flexible plans with no long-term contracts required. You can upgrade, downgrade, or cancel your subscription anytime. Our 30-day free trial lets you test everything risk-free."
              },
              {
                question: "How does the local Malaysian support work?",
                answer: "You get a dedicated Malaysian account manager who understands local business practices. Support includes daily WhatsApp assistance, setup guidance, strategy optimization, and ongoing technical support in English, Bahasa Malaysia, and Chinese."
              },
              {
                question: "What industries work best with ChatConnect Pro?",
                answer: "While we specialize in e-commerce, spas, and clinics, ChatConnect Pro works for any business that uses WhatsApp for customer communication. We have pre-built templates and can customize solutions for restaurants, real estate, education, and more."
              },
              {
                question: "How secure is my customer data?",
                answer: "We use enterprise-grade security with end-to-end encryption. All data is stored securely and complies with WhatsApp Business API requirements and Malaysian data protection standards. Your customer information is never shared with third parties."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg">
                <details className="group">
                  <summary className="p-6 cursor-pointer flex items-center justify-between font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    <span className="text-lg">{faq.question}</span>
                    <i className="ri-add-line text-xl group-open:rotate-45 transition-transform duration-300"></i>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-br from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Stop missing leads. Stop drowning in messages. Start automating for growth.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg font-semibold mb-4">
              Don't wait! Spaces for our dedicated onboarding support are limited.
            </p>
            <div className="flex items-center justify-center text-yellow-400 text-lg">
              <i className="ri-arrow-right-line mr-2"></i>
              <span className="font-bold">GET YOUR FREE CONSULTATION TODAY!</span>
              <i className="ri-arrow-left-line ml-2"></i>
            </div>
          </div>
          
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-12 py-4 rounded-full text-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap mb-4">
            Start Your FREE Trial Now
          </button>
          
          <div className="text-sm opacity-90">
            💳 No Credit Card Required • 🚀 Setup in 15 Minutes • ✅ Cancel Anytime
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold font-pacifico mb-4 text-green-400">ChatConnect Pro</div>
              <p className="text-gray-400 text-sm">
                Revolutionizing customer engagement for Malaysian businesses through AI-powered WhatsApp automation.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Demo</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">WhatsApp Setup</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Training</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ChatConnect Pro by DialogFlow. All rights reserved. Made in Malaysia 🇲🇾</p>
          </div>
        </div>
      </div>
    </div>
  );
}
