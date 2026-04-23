import { useState } from 'react'




const Statistics = (props) => {
  const {good,bad,neutral} = props; 
  const all = good+bad+neutral;
  const average = (good - bad)/all;
  const positive = good/all *   100 + " %";
  
  if(all > 0)
  {
  return (
    <div>
      <table>
        <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
   </div> 
  )
  }
  return (
    <div>
      <p> No feedback given</p>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

      <h1>give feedback</h1> 

      <Button text="good" set={setGood} value={good}/>
      <Button text="neutral" set={setNeutral} value={neutral}/>
      <Button text="bad" set={setBad} value={bad}/>

      <h1>statistics</h1>
      <Statistics good = {good} bad = {bad} neutral = {neutral} />

    </div>
  )
}

const StatisticLine = (props) => {
  const {text,value} = props;
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

const Button = (props) => {
  const {text,set,value} = props;
  return (
      <button onClick={() => set(value + 1)}> {text} </button>
  )
}

export default App