import './Header.css';
import phlogo from './image/telephone-symbol-button.png'
import './Footer.css'

function Header(){
    return(
     <div className='header'>
       <img className='phlog'  src={phlogo} alt='phlogo'></img>
       <p className='headerfont'>08373-266343, 262075 </p>
       <p className='headerfont'>Fax: 08373-266427</p>
       <p className='headerfont'>CET CODE : E033</p>
       <p className='headerfont headerfont2'>Research progam</p>
       <p className='headerfont'>Alumni</p>
     </div>
    );
}
 

function Footer(){
    return(
      <div className='footer'>
        <p>Epigram</p>
           <br/>
        <p className='footerfont'>" Don`t study to earn, Study to learn
What you learn today, Is what you will Become 
tomorrow "</p>
      </div>
    );
}
export  {Footer,Header};