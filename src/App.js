import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';
import './App.css'

const initialValues = {
  name: '',
  special: '',
  size: '',
  pepperoni: false,
  sausage: false,
  onions: false,
  spinach: false,
  sauce: false,
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
    .post('https://reqres.in/api/user', newUser)
    .then(res => {
      setUser([...user, res.data]);
      console.log(res.data);
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
      size: formValues.size,
      toppings:['pepperoni', 'sausage', 'onions', 'spinach'].filter(toppings => formValues[toppings]),
      sauce: ['sauce'].filter(sauce =>formValues[sauce]),
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
      
      <Switch>
        <Route path={'/pizza'}>
          <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

      </div>
  )
}
