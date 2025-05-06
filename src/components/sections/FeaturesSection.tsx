import React from 'react';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  LineChart 
} from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedElement animation="fadeInUp" delay={delay} className="card card-hover">
      <div className="p-4 rounded-full bg-primary-100 inline-flex mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedElement>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary-600" />,
      title: "Real Followers",
      description: "Gain authentic followers who are genuinely interested in your content. No bots or fake accounts."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary-600" />,
      title: "Organic Growth",
      description: "Our growth strategy follows Instagram's guidelines for a sustainable and natural increase in followers."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: "Account Safety",
      description: "Your account security is our priority. We never ask for your password and use only safe, approved methods."
    },
    {
      icon: <Target className="h-6 w-6 text-primary-600" />,
      title: "Targeted Audience",
      description: "Attract followers based on interests, location, and demographics that match your ideal audience."
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary-600" />,
      title: "Analytics Dashboard",
      description: "Track your growth with our detailed analytics dashboard showing follower growth and engagement."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: "Fast Delivery",
      description: "See results in as little as 24 hours, with continuous growth throughout your subscription."
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container-custom">
        <AnimatedElement className="text-center mb-16">
          <h2 className="mb-4">
            Why Choose <span className="gradient-text">S FOLLOWER</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the most effective and safe Instagram growth service,
            helping you build a real audience that engages with your content.
          </p>
        </AnimatedElement>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;