import React, { Component } from 'react';
//import { GeneralList } from './GeneralList';
import { SortedList } from "./SortedList";
import { ProModeContext } from './ProModeContext';
import { ProModeToggle } from './ProModeToggle';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      names: ["Zosia", "Kuba", "Ala", "Ola", "Jaś"],
      cities: ["Londyn", "Nowy York", "Paryż", "Milan", "Wrocław"],
      //proMode: false
      proContextData: {
        proMode: false,
        toggleProMode: this.toggleProMode
      },
      superProContextData: {
        proMode: false,
        toggleProMode: this.toggleSuperMode
      }
    }
  }

  toggleProMode = () => {
    this.setState(state => state.proContextData.proMode
      = !state.proContextData.proMode);
  }

  toggleSuperMode = () => {
    this.setState(state => state.superProContextData.proMode
      = !state.superProContextData.proMode);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <SortedList proMode={this.state.proMode}
              list={this.state.names} />
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-center p-2">
            <ProModeContext.Provider value={this.state.proContextData}>
              <ProModeToggle label="Tryb dla speców" />
            </ProModeContext.Provider>
          </div>
          <div className="col-6 text-center p-2">
            <ProModeContext.Provider
              value={this.state.superProContextData}>
              <ProModeToggle label="Tryb dla super speców" />
            </ProModeContext.Provider>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ProModeContext.Provider value={this.state.proContextData}>
              <SortedList list={this.state.names} />
            </ProModeContext.Provider>
          </div>
          <div className="col-6">
            <ProModeContext.Provider
              value={this.state.superProContextData}>
              <SortedList list={this.state.cities} />
            </ProModeContext.Provider>
          </div>
        </div>
      </div>
    )
  }
}