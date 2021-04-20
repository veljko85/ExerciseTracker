import Training from './Training'
import { useState } from 'react'
import Chest from './Chest'
import Arms from './Arms'
import Sholders from './Sholders'
import Back from './Back'
import Legs from './Legs'

const Tranings = ({trainings, onDelete}) => {
const [filterGroup, setFilterGroup] = useState('')
const [filterExercise, setFilterExercise] = useState('')
// styles of exercises section
const trainingStyle = (training) => {
    if (training.group === 'Chest') {
        return ['#DEFEFF', '#0090FF']
    } else if (training.group === 'Arms') {
        return ['#FFDEDE', '#FF1A1A']
    } else if (training.group === 'Sholders') {
        return ['#FFE1FF', '#F600F6']
    } else if (training.group === 'Back') {
        return ['#D9FFDE', '#06AC00']
    } else if (training.group === 'Legs') {
        return ['#FFFBE5', '#E5C100']
    }
}

// map throu exercises for displaying exercises them
const mapTrainings = (trainings) => {
    return trainings.reverse().map((training) => (
        <Training key={training.id} training={training} backCol={trainingStyle(training)[0]} exeCol={trainingStyle(training)[1]} onDelete={onDelete}/>
    ))
}
//display exercises on DOM
const displayExercises =()=>{
   const showLastTen = trainings.slice(Math.max(trainings.length - 10, 0));
    if (filterGroup) {
        if(filterExercise){
            trainings = trainings.filter(obj => {return obj.exercise === filterExercise});
            return mapTrainings(trainings);
        }else if(filterGroup){
            trainings = trainings.filter(obj => {return obj.group === filterGroup});
            return mapTrainings(trainings);
        }
    }else {      
        return mapTrainings(showLastTen);
    }
}

const selectExercise = () => {
    if (filterGroup === 'Chest') {
        return <Chest />
      } else if (filterGroup === 'Arms'){
         return <Arms/>
      } else if (filterGroup === 'Sholders'){
      return <Sholders/>
      }else if (filterGroup === 'Back'){
          return <Back/>
      }else if (filterGroup === 'Legs'){
          return <Legs/>
      } else {return ''}
    }

const groupOnChange = (target) => {
    setFilterExercise('');
    setFilterGroup(target);
}    
    return (
        <div className='exercise-section'>
            <h5>Sort:</h5>
            <select value={filterGroup} onChange={(e)=> groupOnChange(e.target.value)}>
                <option value="">Show Last Ten Exercises</option>
                <option value='Chest'>Show Chest Exercises</option>
                <option value='Arms'>Show Arms Exercises</option>
                <option value='Sholders'>Show Sholders Exercises</option>
                <option value='Back'>Show Back Exercises</option>
                <option value='Legs'>Show Legs Exercises</option>
            </select> 
            <br></br>
            <select value={filterExercise} onChange={(e)=> setFilterExercise(e.target.value)}>
                <option value=''>Show All {filterGroup} Exercises</option>
                {selectExercise()}
            </select>
            {displayExercises()}

        </div>
    )
}

export default Tranings
