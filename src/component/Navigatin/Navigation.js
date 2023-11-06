import stjit from './image/stjit2.png';
import './Navigation.css'

function Navigation(){
    return(
        <div className='navigation'>
         <img src={stjit} alt='stjit' className='stjitlogo'></img>
         <p className='navfont'>Home</p>
         <p className='navfont'>About</p>
         <p className='navfont'>Admission</p>
         <p className='navfont'>Department</p>
         <p className='navfont'>Plcement</p>
         <p className='navfont'>Facilities</p>
         <p className='navfont'>Contact</p>
     </div>
    );
}
export default Navigation;