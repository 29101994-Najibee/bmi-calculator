import './App.css';
import './index.css'
import React, { useState } from 'react'

function App() {
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calcBmi = (event) => {
    // prevent submitting to the server
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      // Convert height from cm to meters
      let heightInMeters = height / 100
      // Calculate BMI
      let bmi = weight / (heightInMeters * heightInMeters)
      setBmi(bmi.toFixed(1))

      // Logic for message
      if (bmi < 18.5) {
        setMessage('You are underweight')
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a healthy weight')
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage('You are overweight')
      } else {
        setMessage('You are obese')
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type='number'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min='0'
            />
          </div>

          <div>
            <label>Height (cm)</label>
            <input
              type='number'
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              min='0'
            />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
