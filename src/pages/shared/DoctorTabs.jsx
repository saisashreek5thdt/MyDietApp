import React from "react";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";

import Appointment from "../form-validations/Appointment";
import MyPatients from "../form-validations/MyPatients";
import Chat from "../form-validations/Chat";
import CreatePatientForm from "../form-validations/Patient/CreatePatientForm";

export default class DoctorTabs extends React.Component {
  constructor() {
    super(...arguments);
    this.headerText = [
      { text: "Appointments" },
      { text: "My Patients" },
      { text: "Create Form Patient" },
      { text: "Chat" },
    ];
  }
  content0() {
    return (
      <div className="py-5">
        <Appointment />
      </div>
    );
  }
  content1() {
    return (
      <div className="py-3">
        <MyPatients />
      </div>
    );
  }
  content3() {
    return (
      <div className="py-3">
        <Chat />
      </div>
    );
  }

  content2() {
    return (
      <div className="py-3">
        <CreatePatientForm />
      </div>
    );
  }

  render() {
    return (
      <TabComponent heightAdjustMode="Auto">
        <TabItemsDirective>
          <TabItemDirective
            header={this.headerText[0]}
            content={this.content0}
          />
          <TabItemDirective
            header={this.headerText[1]}
            content={this.content1}
          />
          <TabItemDirective
            header={this.headerText[2]}
            content={this.content2}
          />
          <TabItemDirective
            header={this.headerText[3]}
            content={this.content3}
          />
        </TabItemsDirective>
      </TabComponent>
    );
  }
}
