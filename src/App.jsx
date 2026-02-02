import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubjectList from './components/SubjectList'
function App() {
  const subjects=["ReactJS","NodeJS","Java","Database"]; 

  return (
      <div className='container'>
        <h1>Ứng dụng ReactJS</h1>
    <SubjectList subjects={subjects}/>
      </div>
  );
}

export default App
