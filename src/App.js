// IMPORT STYLE
import './App.css';

// IMPORT COMPONENTS 
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Interests from './components/interests/Interests';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Intro/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default App;
