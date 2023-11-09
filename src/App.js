import Spline from '@splinetool/react-spline';
import "./App.css"
import NavBar from './Components/Nav';
import Index from './pages/index';
import About from './pages/About';
import Loader from './Components/loading';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {
  const[loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[])

  return (
    <>
      {loading && <div className='loading-screen'><Loader/></div>}
      <Spline className='spline' scene="https://prod.spline.design/fdtWS0Vasi3kNg9J/scene.splinecode" />
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;