import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import PersonFaviver from "./pages/PersonFaviver";



const App   = () => {
 
  
  
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about/:id/:name' element={<AboutPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='404' element={<NotFound/>} />
          <Route path='/favritPrson/:person/:music/:rate' element={<PersonFaviver/>} />

        </Routes>
      </BrowserRouter>
      
    </div> 

  )
}


export default App  ;