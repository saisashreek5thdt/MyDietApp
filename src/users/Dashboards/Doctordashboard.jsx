import React from "react";
import DocNav from "../shared/DocNav";
import DoctorTabs from "../../pages/shared/DoctorTabs";

const Doctordashboard = () => {
  

  return (
    <>
      <div className="dashboard__Container">
        <DocNav />
        <main className="dashboard__Main-Content">
          <div className="dashboard__Main-Inner-Content">
            <DoctorTabs />
          </div>
        </main>
      </div>
    </>
  );
};

export default Doctordashboard;
