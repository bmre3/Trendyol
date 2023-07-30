import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Baslik from './Components/Baslik';
import Header from './Components/Header';
import Headerbot from './Components/Headerbot';
import Images from './Components/Images';
import Section1 from './Components/Section1';
import Kart from './Components/Kart';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2';
import Owlcaro from './Components/Owlcaro';


function App() {

  return (

    <div className="App">
      <Baslik></Baslik>
      <Header></Header>
      <Headerbot></Headerbot>
      <Images></Images>
      <Owlcaro></Owlcaro>
      <Section1></Section1>
      <Kart></Kart>
      <Section2></Section2>
      <Section3></Section3>
      <Footer></Footer>
      <Footer2></Footer2>
    </div>
  );
}

export default App;
