import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Route , Routes , Navigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />}/>  
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Navigate to="/signup" />}/>
      </Routes>
    </div>
  );
}

export default App;
