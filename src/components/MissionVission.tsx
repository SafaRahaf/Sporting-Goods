import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Mission and Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae nulla a dui efficitur eleifend.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae nulla a dui efficitur eleifend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
