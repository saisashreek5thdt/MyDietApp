import React from "react";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";

export default class PatientTabs extends React.Component {
  constructor() {
    super(...arguments);
    this.headerText = [
      { text: "Daily Forms" },
      { text: "Weekly Forms" },
      { text: "Bi-Weekly Forms" },
    ];
  }
  content0() {
    return <div className="py-5">{/* <Appointment /> */}</div>;
  }
  content1() {
    return <div className="py-3">{/* <MyPatients /> */}</div>;
  }
  content2() {
    return <div className="py-3">{/* <Chat /> */}</div>;
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
        </TabItemsDirective>
      </TabComponent>
    );
  }
}
