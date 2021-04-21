import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <Link to='/ExerciseTracker/home'>
                <div className='nav-link-container'>Home</div>
            </Link>
            
            <Link to='/ExerciseTracker/about'>
                <div className='nav-link-container'>About</div>
            </Link>
            
            <Link to='/ExerciseTracker/exercises'>
                <div className='nav-link-container'>Exercises</div>
            </Link>
            
            <Link to='/ExerciseTracker/credits'>
                <div className='nav-link-container'>Credits</div>
            </Link>
        </>
    )
}

export default NavBar
