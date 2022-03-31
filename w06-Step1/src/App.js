import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import {Landing,  Dashboard ,Register,Error} from "./pages";
import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
