import React, { useState } from 'react'
import { validate } from '../utils/validators'

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID',
}

function Input({ label, id, type, validators, errorText }) {
  const [inputState, setInputState] = useState(INPUT_STATES.UNTOUCHED)

  const validateInput = (value) => {
    if (!validate(value, validators)) {
      setInputState(INPUT_STATES.INVALID)
    } else {
      setInputState(INPUT_STATES.VALID)
    }
  }

  const handleChange = (e) => {
    if (inputState !== INPUT_STATES.UNTOUCHED) {
      const value = e.target.value
      validateInput(value)
    }
  }

  const handleBlur = (e) => {
    validateInput(e.target.value)
  }

  return (
    <div
      className={
        inputState === INPUT_STATES.INVALID
          ? 'form-input form-input--invalid'
          : 'form-input'
      }
      data-testid="form-input"
    >
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} onChange={handleChange} onBlur={handleBlur} />
      <p>{inputState === INPUT_STATES.INVALID && errorText}</p>
    </div>
  )
}

export default Input
