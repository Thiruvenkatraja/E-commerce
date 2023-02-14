import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Leftbar from './Components/Sidebar/Sidebar.tsx';
import SignUp from './Components/Login/Register.tsx';
import LogIn from './Components/Login/Login.tsx';


function App() {
  return (
    <div className="App">
    <Leftbar/>
    <Router>
      <Routes>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
     </Routes>
    </Router>
    </div>  
  );
}

export default App;
