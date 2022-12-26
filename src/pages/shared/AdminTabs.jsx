import React from "react";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";

export default class AdminTabs extends React.Component {
  constructor() {
    super(...arguments);
    this.headerText = [
      { text: "Summary" },
      { text: "Access Controls" },
      { text: "Forms & Diet Charts" },
      { text: "Data" },
    ];
  }
  content0() {
    return (
      <div className="py-5">
        {/* <Appointment /> */}
      </div>
    );
  }
  content1() {
    return (
      <div className="py-3">
        {/* <MyPatients /> */}
      </div>
    );
  }
  content3() {
    return (
      <div className="py-3">
        {/* <Chat /> */}
      </div>
    );
  }

  content2() {
    return (
      <div className="py-3">
        {/* <CreatePatientForm /> */}
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
