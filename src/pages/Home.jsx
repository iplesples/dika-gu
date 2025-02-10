import Nav from '../components/widget/Navbar';
import HomeHorizontal from '../components/container/HomeHorizontal';
import TopSlide from '../components/widget/TopSlide';




const Home = () => {
  return (
 
    <div className='relative'>
     <HomeHorizontal />
     <TopSlide />
     <Nav />
    </div>

  )
}

export default Home