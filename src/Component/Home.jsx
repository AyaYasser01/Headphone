import img from "../assets/headphone.png";
import img2 from "../assets/headphone2.png";
import img3 from "../assets/headphone3.png";
import { UpdateFollower } from 'react-mouse-follower';

const Home = () => {
    const list =
    [
        {
            id:1,
            img: img,
            text:"Modal Brown",
            color:"#8B5958"
        }
        ,
        {
            id:2,
            img: img2,
            text:"Lime Green",
            color:"#4b663e"
        }
        ,
        {
            id:3,
            img: img3,
            text:"Ocean Blue",
            color:"#4d6e79"
        }
    ]
  return (
    <div className="bg-[#141617] text-white   px-12 md:px-12">

    <div className=" container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
      <div className=" flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
        <div className="text-center md:text-left space-y-5">
          <UpdateFollower
          mouseOptions={{
            backgroundColor: 'white',
            zIndex: 999,
            followSpeed: 0.5,
            rotate:-740,
            scale:10,
            mixBlendMode:"difference"
          }}>
          <h1 className=" text-3xl lg:text-6xl font-bold">
            Headphones Wireless
          </h1>
          </UpdateFollower>
          <p className="text-sm leading-loose text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos
          </p>
          <UpdateFollower
          mouseOptions={{
            backgroundColor: "#8B5958",
            zIndex: 999,
            followSpeed: 0.5,
            rotate:-740,
            scale:5,
            backgroundElement:(
              <div>
                <img src={img}/>
              </div>
            )
          }}>
          <button className="px-4 py-2 mt-4  rounded-sm bg-[#8B5958]">
            Buy and Listen
          </button>
          </UpdateFollower>
        <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
          <div className="w-20 h-[1px] bg-white"></div>
          <p className="uppercase text-sm">Top Headphones for you</p>
          <div className="w-20 h-[1px] bg-white"></div>
        </div>
        <div >
            <div className="grid grid-cols-3 gap-10">
                {list.map((data)=>(
              // eslint-disable-next-line react/jsx-key
              <UpdateFollower
              mouseOptions={{
                backgroundColor: data.color,
                zIndex: 999,
                followSpeed: 0.5,
                scale:5,
                text:"View Details",
                textFontSize:"3px"
              }}>
                    <div key={data.id} className="grid grid-cols-2 place-items-center cursor-pointer">
                        <img src={data.img} alt="headphone" className="w-[200px]"/>
                        <div className="space-y-2">
                            <p className="text-base font-bold">$100</p>
                            <p className="text-xs font-normal text-nowrap">{data.text}</p>
                            </div>
                    </div>
                </UpdateFollower>
                ))}
            </div>
        </div>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center">
        <img
          src={img}
          alt="headphone"
          className="w-[300px] md:w-[400px] xl:w-[550px]"
          />
      </div>
    </div>
    </div>
  );
};

export default Home;
