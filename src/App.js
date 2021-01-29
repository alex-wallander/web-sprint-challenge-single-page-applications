import React, { useState} from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';

const initialValues = {
  name: '',
  special: '',
}

const initialValueErrors = {
  name: '',
  special: '',
}

const initialUser = [];


export default function App() {
  
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValueErrors);

  const postNewUser = (newUser) => {
    axios
    .post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUser([...user, res.data]);
      setFormValues(initialValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors, [name]: '',
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors, [name]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name,
      special: formValues.special,
    }
    postNewUser(newUser);
  }

  return (
    <div className='app'>
      <nav>
        <h1 className='lambda-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/'>Help</Link>
        </div>
      </nav>
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      errors={formErrors}
      />
      </div>
  )
}
