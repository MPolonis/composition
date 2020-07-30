import React, { Component } from "react";
//import { ActionButton } from "./ActionButton";
//import { Message } from "./Message";
//import { ThemeSelector } from "./ThemeSelector";
import { GeneralList } from "./GeneralList";
import { SortedList } from "./SortedList";
//import { ProFeature } from "./ProFeature";
import { ProController } from "./ProController";
import { LogToConsole } from "./LogToConsole";

const ProList = ProController(LogToConsole(SortedList, "Sorted", true, true, true));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //counter: 0
      names: ["Zosia", "Kuba", "Ala", "Ola", "Jaś"],
      cities: ["Londyn", "Nowy York", "Paryż", "Milan", "Wrocław"],
      //proMode: false
    }
  }

  // incrementCounter = () => {
  //   this.setState({counter: this.state.counter + 1});
  // }
  toggleProMode = () => {
    this.setState({proMode: !this.state.proMode});
  }

  render() {
    return (
      // <div className="m-2 text-center">
      //   <ThemeSelector>
      //     <Message theme="primary"
      //       message={`Licznik: ${this.state.counter}`} />
      //     <ActionButton theme="secondary"
      //       text="Inkrementuj" callback={this.incrementCounter} />
      //   </ThemeSelector>
      // </div>
      <div className="container-fluid">
        {/* <div className="row">
          <div className="col-6">
            <GeneralList list={this.state.names} theme="primary" />
          </div>
          <div className="col-6">
            <SortedList list={this.state.names} />
          </div>
        </div> */}
        
        <div className="row">
          <div className="col-3">
            <GeneralList list={this.state.names} theme="primary" />
          </div>
          <div className="col-3">
            <ProList list={this.state.names} />
          </div>
          <div className="col-3">
            <GeneralList list={this.state.cities} theme="secondary" />
          </div>
          <div className="col-3">
            <ProList list={this.state.cities} />
          </div>
        </div>
      </div>
    )
  }
}
