import React from 'react';
import PatientNav from '../shared/PatientNav';
import PatientTabs from '../../pages/shared/PatientTabs';

const PatientDashboard = () => {
  return (
    <>
      <div className="dashboard__Container">
       <PatientNav />
        <main className="dashboard__Main-Content">
          <div className="dashboard__Main-Inner-Content">
            <PatientTabs />
          </div>
        </main>
      </div>
    </>
  )
}

export default PatientDashboard