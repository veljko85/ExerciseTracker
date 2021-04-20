import {AiFillGithub} from 'react-icons/ai'
import {SiLinkedin} from 'react-icons/si'

const Credits = () => {
    return (
        <div className='credits'>
            <h2>Copyright &copy; 2021</h2>
            <h2>Developed By Velibor Markovic</h2>
            <div className='credit-icons'>
            <a href="https://www.linkedin.com/in/velibor-markovic-431378144/" target="blank"><SiLinkedin className='credit-icon'/></a>

            <a href="https://github.com/veljko85" target="blank"><AiFillGithub className='credit-icon'/></a>
            </div>
            
        </div>
    )
}

export default Credits
