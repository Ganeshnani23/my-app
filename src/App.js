import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/logincomponent/LoginComponent';
import AllUsersComponent from './components/alluserscomponent/AllUsersComponent';

function App() {

  let [token, setToken] = useState("");
  useEffect(()=>{
    localStorage.setItem("token",token);
  },[token])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/my-app' element={<LoginComponent setToken={setToken}/>}/>
          {
            token?<Route path='/dashboard' element={<AllUsersComponent/>}/> :<> </>
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
