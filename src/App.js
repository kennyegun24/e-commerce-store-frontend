import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


const App = () => {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div className="app">


      <div className='navRoutes'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
