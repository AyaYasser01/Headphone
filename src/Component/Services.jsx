import { UpdateFollower } from 'react-mouse-follower';
import image1 from "../assets/icons/obj1.png";
import image2 from "../assets/icons/obj2.png";
import image3 from "../assets/icons/obj3.png";
const Services = () => {
  const item = [
    {
      id: 1,
      img: image1,
      title: "Security",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    },
    {
      id: 2,
      img: image2,
      title: "Gurantee",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    },
    {
      id: 3,
      img: image3,
      title: "Affordability",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    },
  ];
  return (
    <div className="bg-[#f3f4f6]  px-12 md:px-12 py-[5rem]">
      <div className=" container text-center ">
        <h1 className="text-3xl font-bold text-center pb-10 ">Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {item.map((data) => (
        // eslint-disable-next-line react/jsx-key
        <UpdateFollower 
       mouseOptions={{
        backgroundColor: "transparent",
        zIndex: 999,
        followSpeed: 0.5,
        rotate:-740,
        scale:5,
        backgroundElement:(
          <div>
            <img src={data.img}/>
          </div>
        )
      }}>
            <div key={data.id} className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-lg bg-white">
              <img src={data.img} alt="" className="w-[100px] mb-4"/>
            <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <p className="text-center text-sm text-black/75">{data.text}</p>
            </div>
            </div>
          </UpdateFollower>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
