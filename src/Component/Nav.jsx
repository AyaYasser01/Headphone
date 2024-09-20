import { FaHeadphones } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { UpdateFollower } from 'react-mouse-follower';
const Nav = () => {
  return (
    <div className="bg-[#141617] text-white  px-12 md:px-12">
    <div className="container py-9 flex  justify-between items-center">
        <div>
            <h1 className="text-3xl sm:text-2xl font-bold cursor-pointer uppercase">Playing / <span className="text-gray-400">Market</span></h1>
        </div>
        <div className="hidden md:block">
                <UpdateFollower
                mouseOptions={{
                    backgroundColor: 'white',
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale:5,
                    mixBlendMode:"difference"
                  }}>
                    <ul className="flex items-center  gap-6 cursor-pointer">
                <li>HOME</li>
                <li>CATEGORIES</li>
                <li>BLOG</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <div className="pl-2 text-xl">
                    <FaHeadphones />
                </div>
            </ul>
                </UpdateFollower>
        </div>
        <div className="block md:hidden text-4xl">
        <IoMdMenu />
        </div>
    </div>

    </div>
  )
}

export default Nav