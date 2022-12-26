import React from "react";
import AdminNav from "../shared/AdminNav";
import AdminTabs from "../../pages/shared/AdminTabs";

const AdminDashboard = () => {
  return (
    <>
      <div className="dashboard__Container">
        <AdminNav />
        <main className="dashboard__Main-Content">
          <div className="dashboard__Main-Inner-Content">
            <AdminTabs />
          </div>
        </main>
      </div>
    </>
  )
}

export default AdminDashboard