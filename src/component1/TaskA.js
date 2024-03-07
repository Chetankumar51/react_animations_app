import React from "react";
// import ReactDOM from "react-dom";

import Popover from "react-text-selection-popover";
import { getRandomNumber, getDummyText } from "./helpers";
import "./styles.css";

// SOURCE : https://www.npmjs.com/package/react-text-selection-popover

class TaskA extends React.Component {
  state = {
    identifier: "container_",
    lastSelected: ""
  };

  componentDidMount() {
    this.setState({ identifier: "container_" + getRandomNumber()});
  }

  // To extract selected text from the container element
  onContainerClick = event => {
    //let container = document.getElementById(this.state.identifier);

    let selectedText = document.getSelection().toString();

    if (selectedText && selectedText !== "") {
      this.setState({ lastSelected: selectedText });
    } else {
      this.setState({ lastSelected: "" });
    }
  };

  render() {
    let { identifier, lastSelected } = this.state;
    return (
      <div>
        <h4>Select some text: </h4>

        <div id={identifier} onClick={this.onContainerClick} ref={this.ref}>
          {getDummyText()}
        </div>

        <Popover
          onTextSelect={() => {
            /* Perform action on text select*/
          }}
          onTextUnselect={() => {
            /* Perform action on text unselect*/
          }}
          selectionRef={this.ref}
        >



         <p style={{marginTop:"80px",marginLeft:"0px"}} > You Selected : {lastSelected} </p>
        </Popover>
      </div>
    );
  }
}