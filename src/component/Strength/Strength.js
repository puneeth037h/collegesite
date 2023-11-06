import './Strength.css'

function Strength(){
  const strengtharr =[
    { "number":6,"Titel":"Ug program"},
    { "number":2000,"Titel":"Students"},
    { "number":135,"Titel":"Teachers"},
    { "number":186,"Titel":"Placement"}
  ];



    return(
        <div className='ourstr'>
          <p className='strength' >Our Strength</p>
          <div className='str1'>
            <div className='strength1' >
              {strengtharr.map((data, index) => (
                <div className='str2'>
                <h2 key={index}>
                {data.number}
                <br/>
                {data.Titel}
                <br/>
                </h2>
                </div>
              ))}
            </div >
            
          </div>
        </div>
    );
}
export default Strength;