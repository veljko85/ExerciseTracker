import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Trainings from './components/Tranings'
import Form from './components/Form'
import About from './components/About'
import Exercises from './components/Exercises'
import Credits from './components/Credits.js'

function App() {
  const [trainings, setTrainings] = useState(localStorage.getItem('trainings') ? JSON.parse(localStorage.getItem('trainings')) : []);
  localStorage.setItem('trainings', JSON.stringify(trainings));

  
const addTraining = (training) => { 
  const id = trainings.length > 0 ? (trainings[trainings.length - 1].id + 1) : 1;
  const newTraining = {id: id, ...training}
  setTrainings([...trainings, newTraining]);
}

const deleteExercise = (id) => {
    setTrainings(trainings.filter((training) => training.id !== id));
}

//localStorage.clear()
  return (
    <Router>
      <div className="container">
      
        <Header color = {'#3582E8'} />
        <Route path='/ExerciseTracker/about' component={About}/>
        <Route path='/ExerciseTracker/exercises' component={Exercises}/>
        <Route path='/ExerciseTracker/credits' component={Credits}/>
        <Route path='/ExerciseTracker/home' exact render={(props) => (
          <>
            <Form addTraining={addTraining}/>
            {trainings.length > 0 ? (<Trainings trainings= {trainings} onDelete={deleteExercise}/>) : (<p>You have no saved exercises</p>)}
          </>
        )}
        />
      </div>
    </Router>
  );
}

export default App;
