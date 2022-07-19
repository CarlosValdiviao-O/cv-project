import React, { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import uniqid from "uniqid";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Full Name',
    profession: 'Profession',
    phoneNumber: 'Phone Number',
    email: 'E-Mail',
    address: 'Address',
    description: 'Description',
  })
  const [groups, setGroups] = useState({jobs: [], education: []});
  const [submitted, setSubmitted] = useState(false);
  const [previewButton, setPreviewButton] = useState('Edit');
  const [displayForm, setDisplayForm] = useState(true);

  const handlePersonalChange = (group, name, id, e) => {
    setPersonalInfo(state => ({ ...state, [name]: e.target.value}));
  }

  const handleGroupChange = (group, name, id, e) => {
    let index;
    groups[group].forEach(item => {
      if(item.id === id)
         index = groups[group].indexOf(item);
    })
    let aux = groups[group];
    aux[index][name] = e.target.value;
    setGroups(state => ({...state, aux}))
  }

  const handleDelete = (group, id, e) => {
    setGroups(state => ({ ...state, [group]: groups[group].filter(item => {
      if (item.id !== id) return item;
    })}))
  }

  const addJob = (name, e) => { 
    setGroups(state => ({ ...state, jobs: groups.jobs.concat({
      position: 'Position',
        company: 'Company',
        city: 'City',
        start: 'From(YYYY)',
        end: 'To(YYYY)',
        description: 'Description',
        id: uniqid(),
    })}))
  }

  const addEducation = (name, e) => { 
    setGroups(state => ({ ...state, education: groups.education.concat({
      course: 'Carrer/Course',
        institution: 'Institution',
        start: 'From(YYYY)',
        end: 'To(YYYY)',
        id: uniqid(),
    })}))
  }

  const onEdit = () => {
    let bool, 
        text;
    if (submitted === false) {
      bool = true;
      text = 'Submit';
    }
    else {
      bool = false;
      text = 'Edit';
    }
    setSubmitted(bool);
    setPreviewButton(text);
  }

  const onSubmit = () => {
    setDisplayForm(false);
  }

  if(displayForm === true)
  return ( 
    <div>
      <h1>CV Application</h1>
      <Form edit = {displayForm} handleChange = {handlePersonalChange} jobs = {groups.jobs}
          handleGroupChange = {handleGroupChange} addJob = {addJob}
          handleDelete = {handleDelete} addEducation = {addEducation}
          education = {groups.education} onSubmit = {onSubmit} personalInfo = {personalInfo}/> 
      <Preview edit = {submitted} handleChange = {handlePersonalChange} jobs = {groups.jobs}
          handleGroupChange = {handleGroupChange} addJob = {addJob}
          handleDelete = {handleDelete} addEducation = {addEducation}
          education = {groups.education} onEdit = {onEdit} previewButton = {previewButton}
          personalInfo = {personalInfo} hide = {true}/>     
    </div>
  )
  else
  return (
    <div>
    <h1>CV Application</h1>
      <Preview edit = {submitted} handleChange = {handlePersonalChange} jobs = {groups.jobs}
          handleGroupChange = {handleGroupChange} addJob = {addJob}
          handleDelete = {handleDelete} addEducation = {addEducation}
          education = {groups.education} onEdit = {onEdit} previewButton = {previewButton}
          personalInfo = {personalInfo} hide = {false}/>  
    </div>
  ) 
}

export default App;