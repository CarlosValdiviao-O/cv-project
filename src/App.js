import React, { Component } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Button from "./components/Button";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: true,
      personalInfo: {
        fullName: '',
        profession: '',
        phoneNumber: '',
        email: '',
        address: '',
        other: '',
        description: '',
      },
      jobs: [],
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleGroupChange = this.handleGroupChange.bind(this);
    this.addJob = this.addJob.bind(this);
  }

  handlePersonalChange = (name, id, e) => {
    this.setState(() => {
      this.state['personalInfo'][name] = e.target.value;      
    })
  }

  handleGroupChange = (group, name, id, e) => {
    let index;
    this.state[group].forEach(element => {
      if(element.id === id)
         index = this.state[group].indexOf(element);
    })
    this.setState(() => {
      this.state[group][index][name] = e.target.value;
      })
  }

  addJob = (name, e) => { 
    this.setState({
      jobs: this.state.jobs.concat({
        position: '',
        company: '',
        city: '',
        start: '',
        end: '',
        description: '',
        id: uniqid(),
      })
    })
  }

  onSubmit = () => {
    this.setState({
      displayForm: false,
      submitted: true,
    })
  }

  render() {
    const { displayForm, jobs } = this.state;
    if(displayForm === true)
    return ( 
      <div>
        <Form edit={displayForm} handleChange={this.handlePersonalChange} jobs={jobs}
              handleGroupChange={this.handleGroupChange} addJob={this.addJob} /> 
        <Preview /> 
        <Button onClick={this.onSubmit} text="Submit" name="submit" type='submit'/>   
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
