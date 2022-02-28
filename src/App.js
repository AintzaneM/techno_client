import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// import Feed from './components/feed/Feed';
// import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
// import Sidebar from './components/sidebar/Sidebar';
// import Rightbar from './components/rightbar/Rightbar';
// import styled from 'styled-components'
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route exact path="/"
            element={<Home /> }>
          </Route>
        
          <Route exact path="/login"
            element={<Login /> }>
          </Route>
          <Route exact path="/register"
            element={<Register /> }>
          </Route>
          <Route exact path="/profile/:username"
            element={<Profile /> }>
          </Route>
         
        
           </Routes>
        

      </Router>


    </div>
  );
}

export default App;

// const Container = styled.div`
// display:flex;
// width: 100%;

// `