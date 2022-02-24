import React from 'react'
import Input from './components/Input'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MIN,
  VALIDATOR_MAX,
  VALIDATOR_EMAIL,
  VALIDATOR_PASSWORD
} from './utils/validators'

function App() {
  return (
    <div className="app">
      <Input type="text" label="Name" id="name" 
      validators={[VALIDATOR_REQUIRE()]} 
      errorText="name must be valid"
      />
      <Input type="text" label="Username" id="username"
        validators={[VALIDATOR_MINLENGTH(4), VALIDATOR_MAXLENGTH(12)]} 
        errorText="username must be valid"
      />
      <Input type="text" label="Email" id="email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="email must be valid"
      />
      <Input type="text" label="Age" id="age"
        validators={[VALIDATOR_MIN(18), VALIDATOR_MAX(40)]}
        errorText="age must be valid"
      />
      <Input type="password" label="Password" id="password"
        validators={[VALIDATOR_PASSWORD()]}
        errorText="Password is not acceptable"
      />
    </div>
  )
}
export default App
