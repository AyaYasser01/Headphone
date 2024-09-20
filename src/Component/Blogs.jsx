import image1 from "../assets/blogs/blog1.jpg"
import image2 from "../assets/blogs/blog2.jpg"
import image3 from "../assets/blogs/blog3.jpg"
import image4 from "../assets/blogs/blog4.jpg"
import { UpdateFollower } from 'react-mouse-follower';
const Blogs = () => {
    const items = [
        {
            id:1,
            image:image1,
            title:"Lorem ipsum dolor sit amet consectetur...",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit....",
        }
        ,
        {
            id:2,
            image:image2,
            title:"Lorem ipsum dolor sit amet consectetur...",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit....",
        }
        ,
        {
            id:3,
            image:image3,
            title:"Lorem ipsum dolor sit amet consectetur...",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit....",
        }
        ,
        {
            id:4,
            image:image4,
            title:"Lorem ipsum dolor sit amet consectetur...",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit....",
        }
        ,]
  return (
    <div className="bg-[#f3f4f6]  px-12 md:px-12 py-[5rem]">
        <div className="container">
            <div>
                <h2 className="text-3xl font-bold text-center pb-10">Blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {items.map((data)=>(
                        // eslint-disable-next-line react/jsx-key
                        <UpdateFollower
                        mouseOptions={
                            {
                                backgroundColor: "black",
                                zIndex: 999,
                                followSpeed: 0.5,
                                scale:5,
                                text:"read",
                                textFontSize:"3px"
                            }
                        }>
                        <div key={data.id} className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto 
                        shadow-lg rounded-lg bg-white hover:translate-y-[-16px] duration-300">
                            <img src={data.image} alt="" className=""/>
                            <div className="pt-6">
                            <p className="text-xl font-bold">{data.title}</p>
                            <p>{data.discription}</p>
                            </div>
                        </div>
                    </UpdateFollower>
                    ))}
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Blogs