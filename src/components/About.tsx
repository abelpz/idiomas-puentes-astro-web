import React from 'react';
import { Globe, Book, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About IdiomasPuentes</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Purpose</h2>
          <p className="text-lg mb-4">
            IdiomasPuentes is a convergence of churches in Latin America united by a common purpose: to equip and assist the Global Church to grow and mature in Christ. We strive to see the profound joy and spiritual transformation that occurs when a community hears the Bible spoken in their mother tongue.
          </p>
          <p className="text-lg">
            Our name, "IdiomasPuentes," combines the Spanish words for "languages" and "bridges," reflecting our mission to build bridges between languages and cultures through the power of God's Word.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Bridge Languages</h2>
          <div className="flex items-center mb-4">
            <Globe className="w-8 h-8 text-blue-500 mr-4" />
            <p className="text-lg">
              Bridge languages, primarily Spanish and Portuguese, serve as crucial links between communities with different native tongues. They play a vital role in our mission by:
            </p>
          </div>
          <ul className="list-disc list-inside text-lg ml-4 mb-4">
            <li>Facilitating the initial translation of resources from major world languages</li>
            <li>Serving as a stepping stone for further translation into local languages</li>
            <li>Enabling communication and collaboration across different linguistic communities</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Power of Bridge Languages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <Book className="w-16 h-16 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resource Amplification</h3>
              <p>
                By translating resources into Spanish and Portuguese, we can reach a vast number of communities across Latin America and parts of Africa, who can then further translate these materials into local languages.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-16 h-16 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Empowerment</h3>
              <p>
                Bridge languages empower local churches to take ownership of the translation process, ensuring that the message of God's Word is conveyed accurately and contextually to their communities.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-lg mb-4">
            At IdiomasPuentes, we believe in equipping the church to equip the church. We provide:
          </p>
          <ul className="list-disc list-inside text-lg ml-4">
            <li>Free, open-source translation support</li>
            <li>Training in translation techniques and best practices</li>
            <li>Tools like translation software, manuals, guides, and dictionaries</li>
            <li>A network for sharing resources and knowledge across Latin America and beyond</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;