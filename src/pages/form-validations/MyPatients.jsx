import React from "react";
import MyPatientTable from "./MyPatientTable";

const MyPatients = () => {
  return (
    <>
      <div className="p-2 flex-grow">
        {/* <div className="flex flex-row justify-between items-stretch">
          <div className="p-3">
            <div className="bg-gray-50 rounded-xl justify-center items-center drop-shadow-xl">
              <div className="flex flex-row justify-between items-center">
                <p className="capitalize text-center text-black font-semibold px-32 py-4">
                  Patient Count (Active)
                  <button type="submit" className="w-40 h-10 -px-4 bg-emerald-700 text-white text-2xl drop-shadow-xl rounded-2xl my-4">34</button>
                </p>                
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="bg-gray-50 rounded-xl justify-center items-center drop-shadow-xl">
              <div className="flex flex-row justify-between items-center">
                <p className="capitalize text-center text-black font-semibold px-32 py-4">
                  Patient Count (UnPaid)
                  <button type="submit" className="w-40 h-10 bg-red-700 text-white text-2xl drop-shadow-xl rounded-2xl my-4">34</button>
                </p>                
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="bg-gray-50 rounded-xl justify-center items-center drop-shadow-xl">
              <div className="flex flex-row justify-between items-center">
                <p className="capitalize text-center text-black font-semibold px-32 py-4">
                  Patient Count <br /> (per Program)
                  <button type="submit" className="w-40 h-10 bg-cyan-700 text-white text-2xl drop-shadow-xl rounded-2xl my-4">34</button>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <MyPatientTable />
    </>
  );
};

export default MyPatients;
