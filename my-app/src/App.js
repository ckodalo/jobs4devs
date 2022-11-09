import { Route ,Routes,} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <div >
      <Navbar/>
      <div className='container'>
        <Routes>
          
          <Route  index element={<Home/>}/>
          <Route path="about"element={<About/>}/>
        </Routes>

      </div>

    </div>
  
  );
}

export default App;
