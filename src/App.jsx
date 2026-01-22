import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/profilecard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileCard
        name="Virendra Uplenchwar"
        title="Btech student"
        handle="vir_d_uplenchwar"
        status="Online"
        contactText="Contact Me"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        behindGlowEnabled={false}
        onContactClick={() => console.log('Contact clicked')}
        showIcon
        showBehindGlow
        customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
      />
    </> 
  )
}

export default App
