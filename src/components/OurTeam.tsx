import React from "react";

const OurTeam: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dvz9ssr9t/image/upload/v1693973520/samples/people/kitchen-bar.jpg"
              alt="Team Member 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dvz9ssr9t/image/upload/v1693973547/samples/smile.jpg"
              alt="Team Member 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Jane Smith</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dvz9ssr9t/image/upload/v1693973524/samples/people/smiling-man.jpg"
              alt="Team Member 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Michael Brown</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
