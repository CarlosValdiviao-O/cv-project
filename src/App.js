import React, { Component } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: true,
      personalInfo: {
        fullName: 'Full Name',
        profession: 'Profession',
        phoneNumber: 'Phone Number',
        email: 'E-Mail',
        address: 'Address',
        description: 'Description',
      },
      jobs: [],
      education: [],
      submitted: false,
      previewButton: 'Edit',
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleGroupChange = this.handleGroupChange.bind(this);
    this.addJob = this.addJob.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  handlePersonalChange = (group, name, id, e) => {
    this.setState(() => {
      this.state['personalInfo'][name] = e.target.value;      
    })
  }

  handleGroupChange = (group, name, id, e) => {
    let index;
    this.state[group].forEach(item => {
      if(item.id === id)
         index = this.state[group].indexOf(item);
    })
    this.setState(() => {
      this.state[group][index][name] = e.target.value;
      })
  }

  handleDelete = (group, id, e) => {
    this.setState({
      [group]: this.state[group].filter(item => {
        if (item.id !== id) return item;
      })
    })
  }

  addJob = (name, e) => { 
    this.setState({
      jobs: this.state.jobs.concat({
        position: 'Position',
        company: 'Company',
        city: 'City',
        start: 'From(YYYY)',
        end: 'To(YYYY)',
        description: 'Description',
        id: uniqid(),
      })
    })
  }

  addEducation = (name, e) => { 
    this.setState({
      education: this.state.education.concat({
        course: 'Carrer/Course',
        institution: 'Institution',
        start: 'From(YYYY)',
        end: 'To(YYYY)',
        id: uniqid(),
      })
    })
  }

  onSubmit = () => {
    this.setState({
      displayForm: false,
    })
  }

  onEdit = () => {
    console.log(this.state.submitted)
    let bool, 
        text;
    if (this.state.submitted === false) {
      bool = true;
      text = 'Submit';
    }
    else {
      bool = false;
      text = 'Edit';
    }
    this.setState({
      previewButton: text,
      submitted: bool,
    })
  } 

  render() {
    const { displayForm, jobs, education, personalInfo, submitted, previewButton } = this.state;
    if(displayForm === true)
    return ( 
      <div>
        <Form edit = {displayForm} handleChange = {this.handlePersonalChange} jobs = {jobs}
            handleGroupChange = {this.handleGroupChange} addJob = {this.addJob}
            handleDelete = {this.handleDelete} addEducation = {this.addEducation}
            education = {education} onSubmit = {this.onSubmit} personalInfo = {personalInfo}/> 
        <Preview edit = {submitted} handleChange = {this.handlePersonalChange} jobs = {jobs}
            handleGroupChange = {this.handleGroupChange} addJob = {this.addJob}
            handleDelete = {this.handleDelete} addEducation = {this.addEducation}
            education = {education} onEdit = {this.onEdit} previewButton = {previewButton}
            personalInfo = {personalInfo}/>     
      </div>
    )
    else
    return (
      <div>
        <Preview edit = {submitted} handleChange = {this.handlePersonalChange} jobs = {jobs}
            handleGroupChange = {this.handleGroupChange} addJob = {this.addJob}
            handleDelete = {this.handleDelete} addEducation = {this.addEducation}
            education = {education} onEdit = {this.onEdit} previewButton = {previewButton}
            personalInfo = {personalInfo}/>  
      </div>
    )
  }
}
export default App;
