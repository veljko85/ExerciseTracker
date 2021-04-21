import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <Link to='/'>
                <div className='nav-link-container'>Home</div>
            </Link>
            
            <Link to='/about'>
                <div className='nav-link-container'>About</div>
            </Link>
            
            <Link to='/exercises'>
                <div className='nav-link-container'>Exercises</div>
            </Link>
            
            <Link to='/credits'>
                <div className='nav-link-container'>Credits</div>
            </Link>
        </>
    )
}

export default NavBar
