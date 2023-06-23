
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import Register from './Routes/Register';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path="/register" element={<Register />}></Route>
      
     </Routes> 
    </div>
  );
}

export default App;
