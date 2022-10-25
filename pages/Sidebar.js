import * as React from "react";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import TechnicalSummary from "./TechnicalSummary";

export default function Sidebar() {
  return (
    <div>
      <TechnicalSummary />
      <br />
      <Education />
      <br />
      <ContactInfo />
    </div>
  );
}
