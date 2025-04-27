import React from 'react'

const CounterCard = ({count, handleIncrease, handleDecrease, reset}) => {
  return (
    <div className='card'>
        
       <div className="counter-div"> <h2>{count}</h2></div>
       <div className="btn-div">
       <button onClick={handleIncrease} className='increase-btn'>+</button>
       <button onClick={handleDecrease} className='decrease-btn'>-</button>
       </div>
        <button type="button" onClick={reset} className='reset'>Reset</button>
    </div>
  )
}

export default CounterCard