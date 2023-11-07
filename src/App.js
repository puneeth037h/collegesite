
import './App.css';
import { Header } from './component/Headerfooter/HeaderFooter.js';
import Navigation from './component/Navigatin/Navigation.js';
import Clgimage from './component/clgimage/Clgimage.js';
import Welcome from './component/Welcome/Welcome.js';
import Commitment from './component/commitment/Commitment.js';
import Vision from './component/Vision/Vision.js';
import Strength from './component/Strength/Strength.js';
import { Footer } from './component/Headerfooter/HeaderFooter.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Clgimage></Clgimage>
      <Welcome></Welcome>
      <Commitment></Commitment>
      <Vision></Vision>
      <Strength></Strength>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
