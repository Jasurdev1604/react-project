import './App.css';
import Header from './components/header/header';
import Showcase from './components/showcase/showcase';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
import Section3 from './components/section3/section3';
import Section4 from './components/section4/section4';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Bottom from './components/bottom/bottom';

function App() { 
  return (
  <div className="App"> 
    <Header/> 
    <Showcase/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Contact/>
    <Footer/>
    <Bottom/>
  </div>
  );
}

export default App;
