 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Navbar from './AppBar/Navbar'
 import HomePage from './components/HomePage';
 import AboutPage from './components/AboutPage';
 import ServiesPage from './components/ServiesPage';
 import ContactPage from './components/ContactPage';
 import PortfolioPage from './components/PortfolioPage';
 import CarrerPAge from './components/CarrerPAge';
 import { Toolbar } from '@mui/material';

 function App() {
   return (
     <>
   
      <BrowserRouter>
      <Toolbar/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/aboutpage" element={<AboutPage/>}/>
          <Route path="/serviespage" element={<ServiesPage/>}/>
          <Route path="/contactpage" element={<ContactPage/>}/>
          <Route path="/portfolio" element={<PortfolioPage/>}/>
          <Route path="/carrerpage" element={<CarrerPAge/>}/>
       
        </Routes>
      </BrowserRouter>

     </>
   );
 }

 export default App;


// import React from 'react'
// import { useTypewriter} from 'react-simple-typewriter'

// const MyComponent = () => {

//   const {text} = useTypewriter({
//     words: ['Hello', 'From', 'Typewriter', 'Hook!'],
//     loop: {0:0} // Infinit
//   })

//   return (
//     <div className='App'>
//       <span style={{fontSize:"34px"}}>{text}</span>
//     </div>
//   )
// }

 
  
// export default MyComponent