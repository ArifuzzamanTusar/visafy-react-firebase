
import './App.css';
import Header from './Components/Global/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Blogs from './Components/Pages/Blogs/Blogs';
import About from './Components/Pages/About/About';
import Login from './Components/Pages/Auth/Login/Login';
import Notfound from './Components/Pages/NotFound/Notfound';
import Checkout from './Components/Pages/Checkout/Checkout';
import RequireAuth from './Components/utilities/RequireAuth';
import Footer from './Components/Global/Footer/Footer';
import Signup from './Components/Pages/Auth/Signup/Signup';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="page-body">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/checkout/:id' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>




          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>




      </div>















      <Footer></Footer>
    </div>
  );
}

export default App;
