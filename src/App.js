import React from 'react';
import './App.css';
import Profile from './Profile/Profile'

function App() {
  var username="Mohamed Aouadi";
  
  function handleName() {
    alert("The profile user name is : " +username)
  }
  
  return (
    <div className="App">
      <Profile FullName={username} Bio="
I am a young Tunisian from the city of beja, I am 25 years old and I like to play ping pong" Profession="Web developper" handleName={handleName} >
<img src="/my picture.jpg" style={{width:"25%",height:"50%",borderRadius:"17px"}} alt="profile" /></Profile>

    </div>
  );
}

export default App;
