

const HamButton = ({hamColor, toggleButton}) => {
    const hamLin = document.getElementsByClassName('ham-line');

    const navOpen = () => {
        hamLin[0].style.display = 'none';
        hamLin[1].style.top = '8px';
        hamLin[1].style.transform = 'rotate(45deg)';
        hamLin[2].style.top = '7px';
        hamLin[2].style.transform = 'rotate(-45deg)';      
    }
    const navClose = () => {
        hamLin[0].style.display = 'block';
        hamLin[1].style.top = '7px';
        hamLin[1].style.transform = 'rotate(0deg)';
        hamLin[2].style.top = '14px';
        hamLin[2].style.transform = 'rotate(0deg)';
    }

    const hamburerEffect = async () => {
        await toggleButton ? navOpen() : navClose();
    }

    hamburerEffect();
    
    return (
        
        <div style={hamBut} className='ham-but'>
			<div className="ham-line" style={{...hamLineStyle, ...firstLine, backgroundColor: hamColor}}></div>
			<div className="ham-line" style={{...hamLineStyle, ...secondLine, backgroundColor: hamColor}}></div>
			<div className="ham-line" style={{...hamLineStyle, ...thirdLine, backgroundColor: hamColor}}></div>
		</div>
    )
}

//hamburger button styles
const hamBut = {
    height: '15px',
    width: '27px',
	float: 'right',
}

const hamLineStyle = {
    width: '100%',
	height: '1px',
	transition: '0.1s',
	position: 'relative',
}
const firstLine = {
    display: 'block'
}
const secondLine = {
    top: '7px'
}
const thirdLine = {
    top: '14px'
}

export default HamButton
