'use client';

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image'; // Ensure Image is imported for existing Image components

// Import the ContactForm component
import ContactForm from '../components/ContactForm'; // Adjust path if your components folder is structured differently

// Assuming these components are defined in your components folder and correctly exported
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { BenefitsGrid } from '@/components/BenefitsGrid';


export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  // State for the contact form modal
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

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
              Stop Losing Sales &amp; Appointments to
              <span className="text-yellow-400"> Missed Messages!</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your WhatsApp into a 24/7 sales and support powerhouse with ChatConnect Pro -
              The AI solution that Malaysian businesses trust to automate customer interactions and boost revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openContactForm} // This button now opens the contact form
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Get Started FREE Today
              </button>
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Watch Demo Video
              </button>
            </div>

            {/* Video Modal */}
            {showVideo && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                <div className="relative bg-white rounded-lg shadow-lg p-4">
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/_-MIFofXRNU"
                    title="Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
              </div>
            )}

            <div className="mt-8 text-sm opacity-90">
              ✅ No Setup Fees • ✅ 30-Day Free Trial • ✅ Cancel Anytime
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Benefits Grid */}
      <BenefitsGrid />

      {/* Social Proof */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Results. Real Malaysian Businesses. Real Growth.
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Don&apos;t just take our word for it. See how ChatConnect Pro is already making an impact:
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
              <p className="text-gray-700 italic mb-4">&quot;Before ChatConnect Pro, we were swamped. Now, we&apos;ve reduced customer service response time by 70% during peak hours, directly leading to a 20% increase in repeat orders via WhatsApp! It&apos;s been a game-changer.&quot;</p>
              <div className="font-bold text-gray-900">TechMart Electronics</div>
              <div className="text-green-600 font-semibold text-sm mt-2">70% faster responses • 20% more repeat orders</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-green-600 mb-3">SPA &amp; CLINIC SUCCESS</div>
              <p className="text-gray-700 italic mb-4">&quot;Our sales team used to be overwhelmed. With DialogFlow, our leads are now responded to 100% 24/7, leading to a 40% increase in appointments made via WhatsApp. This is truly transformative!&quot;</p>
              <div className="font-bold text-gray-900">Bella Spa Kuala Lumpur</div>
              <div className="text-green-600 font-semibold text-sm mt-2">100% lead response • 40% more appointments</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-purple-600 mb-3">COST SAVINGS SUCCESS</div>
              <p className="text-gray-700 italic mb-4">&quot;ChatConnect Pro helped us cut our WhatsApp sales team hiring cost by 50%. We now only need 1-2 sales reps to push customers who didn&apos;t make appointments/paid, focusing their efforts where it matters most!&quot;</p>
              <div className="font-bold text-gray-900">Premium Health Clinic</div>
              <div className="text-green-600 font-semibold text-sm mt-2">50% cost reduction • Optimized team focus</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-orange-600 mb-3">E-COMMERCE GROWTH</div>
              <p className="text-gray-700 italic mb-4">&quot;The automated follow-ups and product recommendations generated an extra RM 50K per month! Our conversion rate improved dramatically.&quot;</p>
              <div className="font-bold text-gray-900">Gourmet Kitchen Supplies</div>
              <div className="text-green-600 font-semibold text-sm mt-2">RM 50,000 additional monthly revenue</div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-teal-600 mb-3">BEAUTY &amp; WELLNESS</div>
              <p className="text-gray-700 italic mb-4">&quot;ChatConnect Pro transformed our booking process. We now handle 3x more appointments with the same staff size! Customer satisfaction is through the roof.&quot;</p>
              <div className="font-bold text-gray-900">Luxe Beauty Salon</div>
              <div className="text-green-600 font-semibold text-sm mt-2">300% increase in appointment bookings</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-yellow-600 mb-3">SUPPORT EFFICIENCY</div>
              <p className="text-gray-700 italic mb-4">&quot;Our customers get instant answers 24/7. Support tickets dropped by 85% and sales increased by 45%. The ROI is incredible!&quot;</p>
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
              We don&apos;t just provide software - we deliver complete solutions tailored for Malaysian businesses
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
                title: "Affordable &amp; Customizable",
                description: "Powerful automation doesn&apos;t have to break the bank. Our flexible pricing and templates fit your budget and needs."
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
                answer: "Conversation fees follow Meta&apos;s official WhatsApp Business API pricing. The cost varies based on conversation type (business-initiated vs customer-initiated) and your country. We provide transparent pricing with no hidden fees."
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
              Don&apos;t wait! Spaces for our dedicated onboarding support are limited.
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
            💳 No Credit Card Required • 🚀 Fast Setup From Our Side • ✅ Cancel Anytime
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
}
You're asking about the `page.tsx` file and how to integrate the `ContactForm` from `page1.tsx` into it, without altering anything else.

Yes, you absolutely need to modify your `C:\Users\hmawa\Downloads\ChatConnect site\app\page.tsx` file to incorporate the `ContactForm` functionality.

I've reviewed both `page1.tsx` (which has the form and its logic) and your current `page.tsx` (your main site).

Here's how to update your `page.tsx` to include the `ContactForm` modal, while preserving all your existing content and the video modal functionality:

**Step 1: Update your `C:\Users\hmawa\Downloads\ChatConnect site\app\page.tsx` file**

Please **replace the entire content** of your `C:\Users\hmawa\Downloads\ChatConnect site\app\page.tsx` file with this updated code.

This version incorporates:
* The `ContactForm` import.
* `useState` for `isContactFormOpen` and its `openContactForm`/`closeContactForm` functions.
* The `onClick` handlers for the "Get Started FREE Today" buttons (in the Hero and Final CTA sections) to open the `ContactForm` modal.
* The `<ContactForm />` component itself, rendered at the bottom of the page, controlled by the `isContactFormOpen` state.
* All your existing content, including the video modal, remains untouched.
* All `react/no-unescaped-entities` and `<img>` to `<Image />` conversions are maintained from our previous fixes.


```typescript
'use client';

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image'; // Ensure Image is imported for existing Image components

// Import the ContactForm component
import ContactForm from '../components/ContactForm'; // Adjust path if your components folder is structured differently

// Assuming these components are defined in your components folder and correctly exported
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { BenefitsGrid } from '@/components/BenefitsGrid';


export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  // State for the contact form modal
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

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
              Stop Losing Sales &amp; Appointments to
              <span className="text-yellow-400"> Missed Messages!</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your WhatsApp into a 24/7 sales and support powerhouse with ChatConnect Pro -
              The AI solution that Malaysian businesses trust to automate customer interactions and boost revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openContactForm} // This button now opens the contact form
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Get Started FREE Today
              </button>
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Watch Demo Video
              </button>
            </div>

            {/* Video Modal */}
            {showVideo && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                <div className="relative bg-white rounded-lg shadow-lg p-4">
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <iframe
                    width="560"
                    height="315"
                    src="[https://www.youtube.com/embed/_-MIFofXRNU](https://www.youtube.com/embed/_-MIFofXRNU)"
                    title="Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
              </div>
            )}

            <div className="mt-8 text-sm opacity-90">
              ✅ No Setup Fees • ✅ 30-Day Free Trial • ✅ Cancel Anytime
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Benefits Grid */}
      <BenefitsGrid />

      {/* Social Proof */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Results. Real Malaysian Businesses. Real Growth.
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Don&apos;t just take our word for it. See how ChatConnect Pro is already making an impact:
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
              <p className="text-gray-700 italic mb-4">&quot;Before ChatConnect Pro, we were swamped. Now, we&apos;ve reduced customer service response time by 70% during peak hours, directly leading to a 20% increase in repeat orders via WhatsApp! It&apos;s been a game-changer.&quot;</p>
              <div className="font-bold text-gray-900">TechMart Electronics</div>
              <div className="text-green-600 font-semibold text-sm mt-2">70% faster responses • 20% more repeat orders</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-green-600 mb-3">SPA &amp; CLINIC SUCCESS</div>
              <p className="text-gray-700 italic mb-4">&quot;Our sales team used to be overwhelmed. With DialogFlow, our leads are now responded to 100% 24/7, leading to a 40% increase in appointments made via WhatsApp. This is truly transformative!&quot;</p>
              <div className="font-bold text-gray-900">Bella Spa Kuala Lumpur</div>
              <div className="text-green-600 font-semibold text-sm mt-2">100% lead response • 40% more appointments</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-purple-600 mb-3">COST SAVINGS SUCCESS</div>
              <p className="text-gray-700 italic mb-4">&quot;ChatConnect Pro helped us cut our WhatsApp sales team hiring cost by 50%. We now only need 1-2 sales reps to push customers who didn&apos;t make appointments/paid, focusing their efforts where it matters most!&quot;</p>
              <div className="font-bold text-gray-900">Premium Health Clinic</div>
              <div className="text-green-600 font-semibold text-sm mt-2">50% cost reduction • Optimized team focus</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-orange-600 mb-3">E-COMMERCE GROWTH</div>
              <p className="text-gray-700 italic mb-4">&quot;The automated follow-ups and product recommendations generated an extra RM 50K per month! Our conversion rate improved dramatically.&quot;</p>
              <div className="font-bold text-gray-900">Gourmet Kitchen Supplies</div>
              <div className="text-green-600 font-semibold text-sm mt-2">RM 50,000 additional monthly revenue</div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-teal-600 mb-3">BEAUTY &amp; WELLNESS</div>
              <p className="text-gray-700 italic mb-4">&quot;ChatConnect Pro transformed our booking process. We now handle 3x more appointments with the same staff size! Customer satisfaction is through the roof.&quot;</p>
              <div className="font-bold text-gray-900">Luxe Beauty Salon</div>
              <div className="text-green-600 font-semibold text-sm mt-2">300% increase in appointment bookings</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-yellow-600 mb-3">SUPPORT EFFICIENCY</div>
              <p className="text-gray-700 italic mb-4">&quot;Our customers get instant answers 24/7. Support tickets dropped by 85% and sales increased by 45%. The ROI is incredible!&quot;</p>
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
              We don&apos;t just provide software - we deliver complete solutions tailored for Malaysian businesses
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
                title: "Affordable &amp; Customizable",
                description: "Powerful automation doesn&apos;t have to break the bank. Our flexible pricing and templates fit your budget and needs."
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
                answer: "Conversation fees follow Meta&apos;s official WhatsApp Business API pricing. The cost varies based on conversation type (business-initiated vs customer-initiated) and your country. We provide transparent pricing with no hidden fees."
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
              Don&apos;t wait! Spaces for our dedicated onboarding support are limited.
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
            💳 No Credit Card Required • 🚀 Fast Setup From Our Side • ✅ Cancel Anytime
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

      <a
        href="[https://wa.me/601133141739](https://wa.me/601133141739)" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        style={{ width: 60, height: 60 }}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.364L4 29l7.818-2.048A11.96 11.96 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.885 0-3.675-.516-5.192-1.414l-.37-.221-4.646 1.217 1.24-4.522-.24-.372A9.956 9.956 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.709c-.293-.146-1.734-.857-2.003-.954-.269-.098-.465-.146-.662.146-.197.293-.761.954-.934 1.15-.173.195-.346.22-.639.073-.293-.146-1.237-.456-2.36-1.453-.872-.779-1.461-1.74-1.634-2.033-.173-.293-.018-.451.13-.597.134-.133.293-.346.439-.519.146-.173.195-.293.293-.488.098-.195.049-.366-.024-.512-.073-.146-.662-1.6-.907-2.19-.239-.574-.482-.497-.662-.507l-.564-.01c-.195 0-.512.073-.78.366-.268.293-1.02 1-1.02 2.438 0 1.438 1.045 2.827 1.19 3.022.146.195 2.056 3.14 4.983 4.282.697.3 1.24.478 1.664.612.699.223 1.336.192 1.838.117.561-.084 1.734-.709 1.98-1.393.244-.684.244-1.271.171-1.393-.073-.122-.268-.195-.561-.342z"/>
        </svg>
      </a>
    </div>
  );
}
}

```typescript
'use client';

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image'; // Ensure Image is imported for existing Image components

// Import the ContactForm component
import ContactForm from '../components/ContactForm'; // Adjust path if your components folder is structured differently

// Assuming these components are defined in your components folder and correctly exported
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { BenefitsGrid } from '@/components/BenefitsGrid';


export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  // State for the contact form modal
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

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
              Stop Losing Sales &amp; Appointments to
              <span className="text-yellow-400"> Missed Messages!</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your WhatsApp into a 24/7 sales and support powerhouse with ChatConnect Pro -
              The AI solution that Malaysian businesses trust to automate customer interactions and boost revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openContactForm} // This button now opens the contact form
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Get Started FREE Today
              </button>
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Watch Demo Video
              </button>
            </div>

            {/* Video Modal */}
            {showVideo && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                <div className="relative bg-white rounded-lg shadow-lg p-4">
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/_-MIFofXRNU"
                    title="Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
              </div>
            )}

            <div className="mt-8 text-sm opacity-90">
              ✅ No Setup Fees • ✅ 30-Day Free Trial • ✅ Cancel Anytime
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Benefits Grid */}
      <BenefitsGrid />

      {/* Social Proof */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Results. Real Malaysian Businesses. Real Growth.
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Don&apos;t just take our word for it. See how ChatConnect Pro is already making an impact:
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
              <p className="text-gray-700 italic mb-4">&quot;Before ChatConnect Pro, we were swamped. Now, we&apos;ve reduced customer service response time by 70% during peak hours, directly leading to a 20% increase in repeat orders via WhatsApp! It&apos;s been a game-changer.&quot;</p>
              <div className="font-bold text-gray-900">TechMart Electronics</div>
              <div className="text-green-600 font-semibold text-sm mt-2">70% faster responses • 20% more repeat orders</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-green-600 mb-3">SPA &amp; CLINIC SUCCESS</div>
              <p className="text-gray-700 italic mb-4">&quot;Our sales team used to be overwhelmed. With DialogFlow, our leads are now responded to 100% 24/7, leading to a 40% increase in appointments made via WhatsApp. This is truly transformative!&quot;</p>
              <div className="font-bold text-gray-900">Bella Spa Kuala Lumpur</div>
              <div className="text-green-600 font-semibold text-sm mt-2">100% lead response • 40% more appointments</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-purple-600 mb-3">COST SAVINGS SUCCESS</div>
              <p className="text-gray-700 italic mb-4">&quot;ChatConnect Pro helped us cut our WhatsApp sales team hiring cost by 50%. We now only need 1-2 sales reps to push customers who didn&apos;t make appointments/paid, focusing their efforts where it matters most!&quot;</p>
              <div className="font-bold text-gray-900">Premium Health Clinic</div>
              <div className="text-green-600 font-semibold text-sm mt-2">50% cost reduction • Optimized team focus</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-orange-600 mb-3">E-COMMERCE GROWTH</div>
              <p className="text-gray-700 italic mb-4">&quot;The automated follow-ups and product recommendations generated an extra RM 50K per month! Our conversion rate improved dramatically.&quot;</p>
              <div className="font-bold text-gray-900">Gourmet Kitchen Supplies</div>
              <div className="text-green-600 font-semibold text-sm mt-2">RM 50,000 additional monthly revenue</div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-teal-600 mb-3">BEAUTY &amp; WELLNESS</div>
              <p className="text-gray-700 italic mb-4">&quot;ChatConnect Pro transformed our booking process. We now handle 3x more appointments with the same staff size! Customer satisfaction is through the roof.&quot;</p>
              <div className="font-bold text-gray-900">Luxe Beauty Salon</div>
              <div className="text-green-600 font-semibold text-sm mt-2">300% increase in appointment bookings</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <div className="text-sm font-semibold text-yellow-600 mb-3">SUPPORT EFFICIENCY</div>
              <p className="text-gray-700 italic mb-4">&quot;Our customers get instant answers 24/7. Support tickets dropped by 85% and sales increased by 45%. The ROI is incredible!&quot;</p>
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
              We don&apos;t just provide software - we deliver complete solutions tailored for Malaysian businesses
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
                title: "Affordable &amp; Customizable",
                description: "Powerful automation doesn&apos;t have to break the bank. Our flexible pricing and templates fit your budget and needs."
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
                answer: "Conversation fees follow Meta&apos;s official WhatsApp Business API pricing. The cost varies based on conversation type (business-initiated vs customer-initiated) and your country. We provide transparent pricing with no hidden fees."
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
              Don&apos;t wait! Spaces for our dedicated onboarding support are limited.
            </p>
            <div className="flex items-center justify-center text-yellow-400 text-lg">
              <i className="ri-arrow-right-line mr-2"></i>
              <span className="font-bold">GET YOUR FREE CONSULTATION TODAY!</span>
              <i className="ri-arrow-left-line ml-2"></i>
            </div>
          </div>

          <button
            onClick={openContactForm} // This button also opens the contact form
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-12 py-4 rounded-full text-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap mb-4 cursor-pointer"
          >
            Start Your FREE Trial Now
          </button>

          <div className="text-sm opacity-90">
            💳 No Credit Card Required • 🚀 Fast Setup From Our Side • ✅ Cancel Anytime
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/601133141739" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        style={{ width: 60, height: 60 }}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.364L4 29l7.818-2.048A11.96 11.96 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.885 0-3.675-.516-5.192-1.414l-.37-.221-4.646 1.217 1.24-4.522-.24-.372A9.956 9.956 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.709c-.293-.146-1.734-.857-2.003-.954-.269-.098-.465-.146-.662.146-.197.293-.761.954-.934 1.15-.173.195-.346.22-.639.073-.293-.146-1.237-.456-2.36-1.453-.872-.779-1.461-1.74-1.634-2.033-.173-.293-.018-.451.13-.597.134-.133.293-.346.439-.519.146-.173.195-.293.293-.488.098-.195.049-.366-.024-.512-.073-.146-.662-1.6-.907-2.19-.239-.574-.482-.497-.662-.507l-.564-.01c-.195 0-.512.073-.78.366-.268.293-1.02 1-1.02 2.438 0 1.438 1.045 2.827 1.19 3.022.146.195 2.056 3.14 4.983 4.282.697.3 1.24.478 1.664.612.699.223 1.336.192 1.838.117.561-.084 1.734-.709 1.98-1.393.244-.684.244-1.271.171-1.393-.073-.122-.268-.195-.561-.342z"/>
        </svg>
      </a>

      {/* Contact Form Popup */}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
}
