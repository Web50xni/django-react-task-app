import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import TaskPage from './pages/taskPage'; 
import FormPage from './pages/formPage';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<TaskPage />} />
          <Route path='/tasks' element={<TaskPage />}></Route>
          <Route path='/create' element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
