import { useState } from 'react'
import Chest from './Chest'
import Arms from './Arms'
import Sholders from './Sholders'
import Back from './Back'
import Legs from './Legs'

const Form = ({addTraining}) => {
    const [date, setDate] = useState('')
    const [group, setGroup] = useState('')
    const [exercise, setExercise] = useState('')
    const [weight, setWeight] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')

const onSubmit = (e) => {
    e.preventDefault()
    
    if(!date || !group || !exercise || !weight || !sets || !reps){
        alert('Please Add all details of you exrecise')
        return
    }
    
    addTraining({date, group, exercise, weight, sets, reps})
    
    setDate('')
    setGroup('')
    setExercise('')
    setWeight('')
    setSets('')
    setReps('')
} 
const swichExercise = () => {
    if (group === 'Chest') {
      return <Chest />
    } else if (group === 'Arms'){
       return <Arms/>
    } else if (group === 'Sholders'){
    return <Sholders/>
    }else if (group === 'Back'){
        return <Back/>
    }else if (group === 'Legs'){
        return <Legs/>
    } else {return ''}
  }
    return (
        <form className='add-exercise-form' onSubmit={onSubmit} >
            <div className='input-container'>
                <label>Date</label>
                <input type='date' placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)}></input>
            </div>
            <div className='input-container'>
                <label>Training Group</label>
                <select placeholder='Training Group' value={group} onChange={(e) => setGroup(e.target.value)} >
                    <option value="">Select Training Group</option>
                    <option value="Chest">Chest</option>
                    <option value="Arms">Arms</option>
                    <option value="Sholders">Sholders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                </select>
            </div>
            <div className='input-container'>
                <label>Exercise</label>
                <select placeholder='Exercise' value={exercise} onChange={(e) => setExercise(e.target.value)} >
                <option value="">Select Exercise</option>
                    {swichExercise()}
                </select>
            </div>
            <div className='input-container'>
                <label>Weight (kg)</label>
                <input type='text' placeholder='Weight (kg)' value={weight} onChange={(e) => setWeight(e.target.value)}></input>
            </div>
            <div className='input-container'>
                <label>Sets</label>
                <input type='text' placeholder='Sets' value={sets} onChange={(e) => setSets(e.target.value)}></input>
            </div>
            <div className='input-container'>
                <label>Reps</label>
                <input type='text' placeholder='Reps' value={reps} onChange={(e) => setReps(e.target.value)}></input>
            </div>
            <div className='submit-button-holder'>
                <input type='submit' value='Add Exercise' className='submit-button'></input>
            </div>
        </form>
        
    )
}

export default Form
