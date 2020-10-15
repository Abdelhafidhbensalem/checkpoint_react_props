import React from 'react';
import Profile from './profile/Profile'
import './App.css';

function App() {
  const handleName=(fullname)=>alert(`Hello! I'm ${fullname}.Thank you for visiting my profile!` ) ;
  return (
    <div className="App">
      <Profile handleName={handleName} fullName="Abdelhafidh BEN SALEM"> 
      <img src={"/imageInPublic.jpg"}  className="ProfilPhoto" alt="rofilPhoto" />
      </Profile>
    </div>
  );
}

export default App;
