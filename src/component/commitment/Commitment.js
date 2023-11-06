import './Commitment.css';
import clgpicn from './image/mainsmall.jpg'

function Commitment(){
   
 
    return(
        <div className='commitment'>
            <h2 className='comment'>A Commitment to Technical Education</h2>
            <div className='commit'>
                
                <p className='commitfont'>The real catalyst, which plays important role in shaping the career of a student, is the place of study and its surroundings. Infrastructure of STJ Institute of Technology is at a serene environment on the outskirts of Ranebennur attracts one and all. The campus of the institute extends over an area of 52 acres of land, specially selected to keep the students away from the vitiated atmosphere of city life. Campus is extensively landscaped with green environment. Established in the year 1980. The college is affiliated to Visveswaraiah Technological University, Approved by All India Council for Technical Education and by the Government of Karnataka. Ranebennur is situated in Haveri District of Karnataka, on Poona Bangalore National Highway (NH-4). 295km from Bangalore and 100km from Dharwad. It can be easily reached either by Road or by Rail. Bus frequency from Bangalore to Ranebennur is very high. The Institute is situated at 3km from the Ranebennur Bus Station. The climate throughout the year is mild and salubrious.</p>
                <img src={clgpicn} alt="" className='clgpic1' />
            </div>
        </div>
    );
}
export default Commitment;