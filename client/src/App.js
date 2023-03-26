import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from 'react-router-dom'

// --------user components---------
import Login from './page/user/Login';
import Signup from './page/user/Signup';
import Home from './page/user/Home';

//----------admin components-------------
import AdminLogin from './page/admin/Login'
import AdminHOme from './page/admin/Home'
import Dashboard from './page/admin/Dashboard';
import AddProduct from './page/admin/AddProduct';


function App() {
  return (

    <>

      <Router>

        <Routes>

          <Route exact path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/home' element={<Home />} />

          <Route path='/admin' element={<AdminLogin />} />
          
          <Route path='/admin/home' element={<AdminHOme />}>
            <Route path='dashboard' element={<Dashboard />} />      
            <Route path='addproduct' element={<AddProduct />} />           
          </Route>

        </Routes>

      </Router>

    </>
  );
}

export default App;
