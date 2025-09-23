
import Hero from './components/hero'
import Navbar from '../components/Navbar'
import FloatingIcons from './components/FloatingIcons'
import CardVideoSec from '../components/CardVideoSec'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='relative bg-[#FEFFF1] backdrop-blur-[9px] overflow-hidden'>
       <FloatingIcons />
        <Navbar />
     <Hero />
     <CardVideoSec />
     <Footer />
    </div>
  )
}

export default page