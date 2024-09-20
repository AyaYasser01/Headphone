import image from "../assets/headphone4.png";
import { UpdateFollower } from "react-mouse-follower";
const Technology = () => {
  return (
    <div className="  px-12 md:px-12 ">
      <div className="container  py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12 ">
        <div>
          <img
            src={image}
            alt=""
            className=" w-[300px] md:w-[350px] xl:w-[400px] "
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-3xl lg:text-4xl font-bold">
              The Latest Headphones With The Latest Technology
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: 'white',
                zIndex: 999,
                followSpeed: 0.5,
                scale:5,
                mixBlendMode:"difference"
              }}
            >
              <button
                className=" text-red-500 border-2 border-red-500
                  px-6 py-2 rounded-lg hover:text-white hover:bg-red-500"
              >
                Shop Now
              </button>
            </UpdateFollower>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
