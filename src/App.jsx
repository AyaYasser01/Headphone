import Home from "./Component/Home"
import Nav from "./Component/Nav"
import { UpdateFollower } from 'react-mouse-follower';
import Services from "./Component/Services";
import Technology from "./Component/Technology";
import Section from "./Component/Section";
import Blogs from "./Component/Blogs";
import Footer from "./Component/Footer";

function App() {

  return (
    <div >
      <UpdateFollower
       mouseOptions={{
        backgroundColor: 'white',
        zIndex: 999,
        followSpeed: 1.5,
      }}>
      <Nav/>
      <Home/>
      </UpdateFollower>
      <UpdateFollower
       mouseOptions={{
        backgroundColor: 'black',
        zIndex: 999,
        followSpeed: 1.5,
      }}>
      <Services/>
      <Technology/>
      <Section/>
      <Blogs/>
      <Footer/>
      </UpdateFollower>

    </div>
  )
}

export default App
