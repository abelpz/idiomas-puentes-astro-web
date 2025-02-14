import React from 'react';
import { Users, BookOpen, Laptop, Globe } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Users className="w-12 h-12 text-blue-500" />}
            title="Training"
            description="We provide comprehensive training for Latin American churches in translation techniques and best practices for various spiritual resources."
          />
          <ServiceCard
            icon={<BookOpen className="w-12 h-12 text-blue-500" />}
            title="Resources"
            description="Access to translation manuals, guides, and dictionaries in Spanish and Portuguese to support accurate and contextual translation of the Bible and other materials."
          />
          <ServiceCard
            icon={<Laptop className="w-12 h-12 text-blue-500" />}
            title="Software"
            description="We offer specialized translation software tools to streamline the process of translating various spiritual resources for Spanish and Portuguese-speaking communities."
          />
          <ServiceCard
            icon={<Globe className="w-12 h-12 text-blue-500" />}
            title="Network"
            description="We connect churches across Latin America and Africa, facilitating the sharing of resources and knowledge in Spanish and Portuguese."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
    <p className="text-center">{description}</p>
  </div>
);

export default Services;