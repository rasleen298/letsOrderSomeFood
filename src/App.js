import React from 'react';
import'./App.css'
import {Route,Routes} from 'react-router-dom';



import AllFoods from "./pages/AllFoods";
import MyCart from './pages/MyCart'
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    
    
    <Layout>
    <Routes>
      <Route path="/" element={<AllFoods/>} exact/>
        
       <Route path="/allfoods" element={<AllFoods/>}/>
         
       <Route path="/my-cart" element={<MyCart/>}/>
         
       
       
     </Routes>
     </Layout>
     
    
    
      
    
    
  )
}

export default App
