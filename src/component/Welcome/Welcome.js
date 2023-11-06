import frontview from './image/banner15.jpg'
import frontofclg from './image/banner10.jpg'
import swamiji from './image/banner22.jpg'
import library from './image/library1.jpg'
import inside from './image/banner16.jpg'
import './Welcome.css'

function Welcome(){
    return(
        <div className='wlcpic'>
           <h1 className='wlcfont'>Welcome To Our College</h1>
           <div className='welcomepic'>
             <div className='welcomepic1'>
                <img src={frontview} className='pic'/>
                <img src={frontofclg}  className='pic'/>
             </div> 
             <div className='welcomepic3'>
                <img src={swamiji} alt="" className='pic2'/>
                <h3 className='swamijifooter'>Dr.Shivamurthy Shivacharya Mahaswamiji</h3>
             </div>
             <div className='welcomepic12'>
                 <img src={library} alt="" className='pic'/>
                 <img src={inside} alt="" className='pic' />
             </div>
           </div>
        </div>
    );
}
export default Welcome;