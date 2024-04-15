import './App.css'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import GoalsSection from './components/GoalsSection'
import WorkoutSection from './components/WorkoutSection'
import Hero1 from './components/Hero1'
import Schedule from './components/Schedule'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/hero' element={<Hero1 />}/>
        <Route path='/signup' element={<SignupForm />}/>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/goals' element={<GoalsSection />}/>
        <Route path='/schedule' element={<Schedule />}/>
      </Routes>
    </>
  )
}

export default App
