import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Sidebar from './components/sidebar/Sidebar';


const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-200 antialiased selection: og-cyan-300 selection:text-cyan-900'>
      <div className='flixed top-0 -z-10 h-full w-full'></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className='container mx-auto px-9 py-1'>
        <Navbar />
        <Sidebar />
        <Hero />
        <Experience />
      </div>
      
    </div>
  )
}

export default App