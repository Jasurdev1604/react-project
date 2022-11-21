import './App.css';
import Header from './components/header/header';
import Showcase from './components/showcase/showcase';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';

function App() { 
  return (
  <div className="App"> 
    <Header/> 
    <Showcase/>
    <Section1/>
    <Section2/>
  </div>
  );
}

export default App;
