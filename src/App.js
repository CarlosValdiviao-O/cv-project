import React, { Component } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Button from "./components/Button";
//import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: true,
    }
    this.onSubmit= this.onSubmit.bind(this);
  }

  onSubmit = () => {
    this.setState({
      displayForm: false,
      submitted: true,
    })
  }

  render() {
    const { displayForm } = this.state;
    if(displayForm == true)
    return ( 
      <div>
        <Form /> 
        <Preview /> 
        <Button onClick={this.onSubmit} text="Submit" name="submit"/>   
      </div>
    )
    else
    return (
      <div>
        <Preview />
      </div>
    )
  }
}
export default App;
