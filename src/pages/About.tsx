import CompanyInfo from "@/components/CompanyInfo";
import ContactInfo from "@/components/ContactInfo";
import MissionVision from "@/components/MissionVission";
import OurTeam from "@/components/OurTeam";
import StoreLocation from "@/components/StoreLocation";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div>
      <CompanyInfo />
      <MissionVision />
      <ContactInfo />
      <OurTeam />
      <StoreLocation />
    </div>
  );
};

export default AboutUs;
