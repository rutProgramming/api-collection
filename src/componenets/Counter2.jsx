import { useContext } from 'react'
import { AppContext } from '../Context'

const Counter2 = () => {
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
        }>+</button>
    </div>
  )
}

export default Counter2