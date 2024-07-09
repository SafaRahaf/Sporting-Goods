import React from 'react';

const StoreLocation: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Store Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Main Store</h3>
            <p className="text-gray-700 leading-relaxed">
              Address: 456 Street, City, Country <br />
              Phone: +1234567890
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Branch Store</h3>
            <p className="text-gray-700 leading-relaxed">
              Address: 789 Street, City, Country <br />
              Phone: +1234567890
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
