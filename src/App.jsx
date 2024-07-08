import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from 'sonner'

function App() {

  return (
    <>
    <Toaster visibleToasts={1} position="top-right" richColors  />
    <div className='w-[100vw] flex items-center justify-center flex-col '>
      <div>
      <Header />
      </div>
      <div className='  '>
        <Outlet />
      </div>
      <div className=' bg-slate-300 mt-6 w-screen flex items-center justify-center'>
        <Footer />
      </div>
    </div>
   
    </>
  )
}

export default App
