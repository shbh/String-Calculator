import React, { useState } from 'react';
import './style.css'
const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input, "input")
    let regx;

    let array;

    if (
      input.startsWith('//')

    ) {
      const delimiterIndex = input.indexOf('\\n')
      const delimitarString = input.slice(0, delimiterIndex)
      const delimiter = delimitarString[delimitarString.length - 1]
      regx = new RegExp('[\s,\\n' + delimiter + ']+')
      array = input.slice(delimiterIndex + 2).split(regx)
      array = array.map(Number)
      let index;
      let hasNegativeValue = array.some((value, i) => {
        index = i
        return value < 0
      })
      if (hasNegativeValue) {
        setError("negative numbers not allowed" + array[index])
        setResult('')
      } else {
        const sum =
          array.reduce((acc, num) => acc + Number(num), 0);
        setResult(sum)
        setError('')
      }


    } else {
      regx = /[\s,\\n]+/
      array = input.split(regx)
      array = array.map(Number)
      let index;
      let hasNegativeValue = array.some((value, i) => {
        index = i
        return value < 0
      })
      if (hasNegativeValue) {
        setError("negative numbers not allowed" + array[index])
        setResult('')

      } else {
        const sum =
          array.reduce((acc, num) => acc + Number(num), 0);
        setResult(sum)
        setError('')
      }


    }




  }

  return (
    <div className='mainDiv'>
      <h1>String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter numbers"
          className='inputBox'
        />
        <button className='Button' type="submit">Calculate</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <p>Sum: {result}</p>}
    </div>
  );
};

export default StringCalculator;
