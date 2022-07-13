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
      personalInfo: {
        fullName: '',
        profession: '',
      }
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
  }

  handlePersonalChange = (name, e) => {
    this.setState(() => {
      this.state['personalInfo'][name] = e.target.value;      
    })
    console.log(this.state);
  }

  onSubmit = () => {
    this.setState({
      displayForm: false,
      submitted: true,
    })
  }

  render() {
    const { displayForm } = this.state;
    if(displayForm === true)
    return ( 
      <div>
        <Form edit={displayForm} handleChange={this.handlePersonalChange}/> 
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
