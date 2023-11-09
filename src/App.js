import Spline from '@splinetool/react-spline';
import "./App.css"
import NavBar from './Components/Nav';
import Index from './pages';
import Loader from './Components/loading';
import { useEffect, useState } from 'react';

function App() {
  const[loading, setLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },3000);
  },[])

  return (
    <>
      {loading && <div className='loading-screen'><Loader/></div>}
      <Spline className='spline' scene="https://prod.spline.design/fdtWS0Vasi3kNg9J/scene.splinecode" />
      <NavBar/>
      <Index/>
    </>
  );
}

export default App;
