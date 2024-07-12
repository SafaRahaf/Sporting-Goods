import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-3 flex justify-center">
          Mission and Vision
        </h2>
        <hr className="mb-4 bg-black" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2 flex justify-center">
              Our Mission
            </h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              At <strong>Sport Goods</strong>, our mission is to inspire and
              empower athletes of all ages and abilities to achieve their
              personal best. We strive to offer the highest quality products,
              exceptional customer service, and an unparalleled shopping
              experience. We are committed to supporting the sports community by
              providing innovative equipment and apparel that enhance
              performance, safety, and enjoyment. Our goal is to be the trusted
              partner for all your sporting needs, helping you to push
              boundaries and exceed expectations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 flex justify-center">
              Our Vision
            </h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Our vision at <strong>Sport Goods</strong> is to be the leading
              global retailer of sports equipment and apparel, recognized for
              our dedication to quality, innovation, and customer satisfaction.
              We aim to foster a community of athletes who are passionate about
              their sports and committed to improving their skills. By
              continuously expanding our product offerings and staying ahead of
              industry trends, we envision a future where every athlete has
              access to the tools they need to succeed. We believe in the power
              of sports to bring people together, promote health and well-being,
              and inspire greatness in all aspects of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
