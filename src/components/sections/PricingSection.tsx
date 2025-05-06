import React from 'react';
import { Check, Instagram } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedElement from '../ui/AnimatedElement';

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay: number;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  delay
}) => {
  return (
    <AnimatedElement 
      animation="fadeInUp" 
      delay={delay}
      className={`card relative ${
        isPopular 
          ? 'border-2 border-primary-500 md:scale-105 z-10' 
          : 'border border-gray-200'
      }`}
    >
      {isPopular && (
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-instagram-gradient text-white text-sm font-semibold py-1 px-4 rounded-full">
          Most Popular
        </span>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="text-3xl font-bold mb-2">{price}</div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        variant={isPopular ? 'instagram' : 'outline'}
        className="w-full justify-center"
      >
        <Instagram className="mr-2" size={18} />
        Get Started
      </Button>
    </AnimatedElement>
  );
};

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$29/month",
      description: "Perfect for new creators looking to grow",
      features: [
        "500 followers per month",
        "Basic targeting options",
        "24/7 email support",
        "Instagram analytics dashboard",
        "Follower growth reports"
      ],
      isPopular: false
    },
    {
      title: "Professional",
      price: "$79/month",
      description: "Ideal for influencers and businesses",
      features: [
        "2,000 followers per month",
        "Advanced audience targeting",
        "Priority 24/7 support",
        "Advanced analytics dashboard",
        "Engagement rate optimization",
        "Content strategy recommendations"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "$199/month",
      description: "For established brands and agencies",
      features: [
        "5,000+ followers per month",
        "Custom audience targeting",
        "Dedicated account manager",
        "Full analytics suite",
        "Competitor analysis",
        "Multi-account management",
        "Content calendar integration"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom">
        <AnimatedElement className="text-center mb-16">
          <h2 className="mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works for your goals. All plans include our commitment to provide real, engaged followers.
          </p>
        </AnimatedElement>
        
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
        
        <AnimatedElement animation="fadeInUp" delay={0.6} className="mt-12 text-center bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 font-medium">
            Need a custom solution? 
            <a href="#" className="text-primary-600 ml-1 hover:text-primary-700 transition-colors">
              Contact our team
            </a> 
            for personalized plans tailored to your specific needs.
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default PricingSection;