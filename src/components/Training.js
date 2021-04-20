import {FaTimes} from 'react-icons/fa'

const Training = ({training, backCol, exeCol, onDelete}) => {
    return (
        <div className = 'trainingCont' style={{backgroundColor: backCol, borderColor: exeCol, color: exeCol}} >

            <h2>{training.date}</h2>
            <h1>{training.group}</h1>
            <h3>Exercise: {training.exercise} </h3>
            <h4>Weight: {training.weight}kg </h4>
            <FaTimes className='delete-but' onClick={()=> onDelete(training.id)}/>
            <h4>Sets: {training.sets} </h4>
            <h4>Reps: {training.reps} </h4>
            
        </div>
    )
}

export default Training
