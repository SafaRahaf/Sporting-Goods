import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-gray-700 leading-relaxed">
          Address: 123 Street, City, Country <br />
          Phone: +1234567890 <br />
          Email: info@example.com
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;
