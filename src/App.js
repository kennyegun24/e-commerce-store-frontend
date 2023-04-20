import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Nav from './components/nav/Nav';
import Home from './components/pages/Home';
import NavHead from './components/nav/NavHead';
import Table from './components/pages/Table';
import Orders from './components/pages/Orders';


const App = () => {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div className="app">
      <div className='appNavHead'>
        {currentUser && <NavHead />}
      </div>

      <div className={currentUser ? 'routes' : 'regRoute'}>
        {currentUser
          &&
          <div className='navRoute'>
            <Nav />
          </div>
        }

        <div className={currentUser ? `navRoutes` : 'auth'}>
          <Routes>
            <Route path='/register' element={currentUser ? <Navigate to='/' /> : <Register />} />
            <Route path='/' element={currentUser ? <Home /> : <Login />} />
            <Route path='/products' element={currentUser ? <Table /> : <Navigate to='/' />} />
            <Route path='/orders' element={currentUser ? <Orders /> : <Navigate to='/' />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
