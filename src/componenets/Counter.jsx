import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context'

const Counter = () => {
    const{counter,SetCounter}=useContext(AppContext)
  return (
    <div className='container'>
        <h2>
            Counter:{counter}
        </h2>
        <button onClick={
            ()=>{
                SetCounter(counter+1)
            }
        }>Add 1</button>
    </div>
  )
}

export default Counter