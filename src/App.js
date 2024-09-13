import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Try from './Components/Try';
import Input from './Components/Input';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Navigate to={'/home'}/>}/>
        <Route path='home' element={<Home/>}></Route>
        <Route path='try' element={<Try/>}></Route>
        <Route path='input' element={<Input/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
