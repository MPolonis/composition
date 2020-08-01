import React, { Component } from "react";
//import { ActionButton } from "./ActionButton";
//import { Message } from "./Message";
//import { ThemeSelector } from "./ThemeSelector";
import { GeneralList } from "./GeneralList";
import { SortedList } from "./SortedList";
//import { ProFeature } from "./ProFeature";
//import { ProController } from "./ProController";
//import { LogToConsole } from "./LogToConsole";
import { ProModeContext } from "./ProModeContext";

//const ProList = ProController(LogToConsole(SortedList, "Sorted", true, true, true));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //counter: 0
      names: ["Zosia", "Kuba", "Ala", "Ola", "Jaś"],
      cities: ["Londyn", "Nowy York", "Paryż", "Milan", "Wrocław"],
      //proMode: false
      proContextData: {
        proMode: false
      }
    }
  }

  // incrementCounter = () => {
  //   this.setState({counter: this.state.counter + 1});
  // }
  toggleProMode = () => {
    this.setState(state => state.proContextData.proMode = !state.proContextData.proMode);
  }

  render() {
    return (  
      <div className="container-fluid">      
        <div className="row">
          <div className="col-12 text-center p-2">
            <div className="form-check">
              <input type="checkbox" className="form-check-input"
                value={this.state.proContextData.proMode}
                onChange={this.toggleProMode} />
              <label className="form-check-label">Tryb dla speców</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <GeneralList list={this.state.names}
              theme="primary" />
          </div>
          <div className="col-6">
           
            <ProModeContext.Provider value={this.state.proContextData}>
              <SortedList list={this.state.names} />
            </ProModeContext.Provider>
              
          </div>
        </div>
      </div>
    )
  }
}
