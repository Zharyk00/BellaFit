import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import Blog from './Components/Blog';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Shop from './Components/Shop';
import Sale from './Sale';





function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Nav />}>
        <Route path='/home' index element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contacts />} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
