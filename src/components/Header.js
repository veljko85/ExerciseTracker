import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import HamButton from './HamButton'
import NavBar from './NavBar'



const Header = ({color}) => {
    const[ hamToggle, setHamToggle] = useState(false);
    const navBar = document.getElementsByClassName('nav-bar-container');
    //let toggleNavBar=true;
    const toggleNav = () => {
        if(!hamToggle && document.body.clientWidth < 1024){
            navBar[0].style.height = '50px';
            setHamToggle(true)
         } else if(hamToggle && document.body.clientWidth < 1024){ 
             navBar[0].style.height = '0px';
             setHamToggle(false)
         }
    }
    

    return (
        <div className='header-container'>
            <div className = 'header' style={{backgroundColor: color}} >
            <Link to='/'><img className='header-logo' alt='logo' src={logo}/></Link>
                <Link to='/'><h1 className = 'header-title'>Exercise Tracker</h1></Link>
                <div onClick={()=>toggleNav()}>
                    <HamButton hamColor={'#fff'} toggleButton={hamToggle}/>
                </div>
            </div>
            <div className='nav-bar-container'>
                <div className='nav-bar'onClick={()=>toggleNav()}><NavBar/></div>
            </div>
        </div>
    )
}

export default Header
