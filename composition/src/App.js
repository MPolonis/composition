import React, { Component } from "react";
import { ActionButton } from "./ActionButton";
import { Message } from "./Message";
import { ThemeSelector } from "./ThemeSelector";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <div className="m-2 text-center">
        <ThemeSelector>
          <Message theme="primary"
            message={`Licznik: ${this.state.counter}`} />
          <ActionButton theme="secondary"
            text="Inkrementuj" callback={this.incrementCounter} />
        </ThemeSelector>
      </div>
    )
  }
}
