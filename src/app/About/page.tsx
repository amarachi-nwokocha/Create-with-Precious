
import Hero from './components/hero'
import Navbar from '../components/Navbar'
import FloatingIcons from './components/FloatingIcons'

const page = () => {
  return (
    <div className='relative bg-[#FEFFF1] backdrop-blur-[9px] overflow-hidden'>
       <FloatingIcons />
        <Navbar />
     <Hero />
    </div>
  )
}

export default page