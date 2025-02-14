import React from 'react';
import { Book, Heart, Link } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Book className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Bible Translation</h3>
            <p>We equip and assist the Global Church to translate the Bible and other spiritual resources into their own languages, providing free, open-source support and tools.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Resource Bridges</h3>
            <p>We create bridges between churches worldwide, facilitating the sharing of Bible studies and discipleship materials in Spanish and Portuguese to reach all nations.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Heart className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p>We aim to see churches grow and mature in Christ across Latin America, Spanish/Portuguese-speaking African nations, and beyond as they access God's Word in their heart language.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;