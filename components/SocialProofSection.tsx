import React from 'react';

type Testimonial = {
  category: string;
  categoryColor: string;
  gradient: string;
  quote: string;
  author: string;
  result: string;
};

type Stat = {
  value: string;
  label: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    category: "E-COMMERCE SUCCESS",
    categoryColor: "text-blue-600",
    gradient: "from-blue-50 to-indigo-50",
    quote: "Before ChatConnect Pro, we were swamped. Now, we've reduced customer service response time by 70% during peak hours, directly leading to a 20% increase in repeat orders via WhatsApp! It's been a game-changer.",
    author: "TechMart Electronics",
    result: "70% faster responses • 20% more repeat orders"
  },
  {
    category: "SPA & CLINIC SUCCESS",
    categoryColor: "text-green-600",
    gradient: "from-green-50 to-emerald-50",
    quote: "Our sales team used to be overwhelmed. With DialogFlow, our leads are now responded to 100% 24/7, leading to a 40% increase in appointments made via WhatsApp. This is truly transformative!",
    author: "Bella Spa Kuala Lumpur",
    result: "100% lead response • 40% more appointments"
  },
  {
    category: "COST SAVINGS SUCCESS",
    categoryColor: "text-purple-600",
    gradient: "from-purple-50 to-pink-50",
    quote: "ChatConnect Pro helped us cut our WhatsApp sales team hiring cost by 50%. We now only need 1-2 sales reps to push customers who didn't make appointments/paid, focusing their efforts where it matters most!",
    author: "Premium Health Clinic",
    result: "50% cost reduction • Optimized team focus"
  },
  {
    category: "E-COMMERCE GROWTH",
    categoryColor: "text-orange-600",
    gradient: "from-orange-50 to-red-50",
    quote: "The automated follow-ups and product recommendations generated an extra RM 50K per month! Our conversion rate improved dramatically.",
    author: "Gourmet Kitchen Supplies",
    result: "RM 50,000 additional monthly revenue"
  },
  {
    category: "BEAUTY & WELLNESS",
    categoryColor: "text-teal-600",
    gradient: "from-teal-50 to-cyan-50",
    quote: "ChatConnect Pro transformed our booking process. We now handle 3x more appointments with the same staff size! Customer satisfaction is through the roof.",
    author: "Luxe Beauty Salon",
    result: "300% increase in appointment bookings"
  },
  {
    category: "SUPPORT EFFICIENCY",
    categoryColor: "text-yellow-600",
    gradient: "from-yellow-50 to-amber-50",
    quote: "Our customers get instant answers 24/7. Support tickets dropped by 85% and sales increased by 45%. The ROI is incredible!",
    author: "Digital Solutions Malaysia",
    result: "85% reduction in support tickets • 45% sales increase"
  }
];

const stats: Stat[] = [
  { value: "500+", label: "Happy Clients", color: "text-green-600" },
  { value: "98%", label: "Satisfaction Rate", color: "text-blue-600" },
  { value: "70%", label: "Avg. Cost Reduction", color: "text-purple-600" },
  { value: "40%", label: "Avg. Sales Increase", color: "text-orange-600" },
];

const TestimonialCard = ({ category, categoryColor, gradient, quote, author, result }: Testimonial) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-lg p-6 shadow-lg`}>
    <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
    <div className={`text-sm font-semibold ${categoryColor} mb-3`}>{category}</div>
    <p className="text-gray-700 italic mb-4">&quot;{quote}&quot;</p>
    <div className="font-bold text-gray-900">{author}</div>
    <div className="text-green-600 font-semibold text-sm mt-2">{result}</div>
  </div>
);

const StatItem = ({ value, label, color }: Stat) => (
  <div>
    <div className={`font-bold text-3xl ${color}`}>{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export const SocialProofSection = () => {
  return (
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
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

