import { UpdateFollower } from "react-mouse-follower";
const Section = () => {
  return (
    <div className="container pb-8">
      <div
        className="text-center bg-gradient-to-t  from-[#bd8f8d]
       to-[#bd8f8d]/70 text-white p-8 rounded-3xl  hover:scale-105 duration-500 hover:shadow-2xl"
      >
        <UpdateFollower
        mouseOptions={{
            backgroundColor: 'black',
            zIndex: 9999,
            followSpeed: 0.5,
            mixBlendMode:"screen",
            scale:10,
        }}>
        <h1 className="font-bold text-4xl max-w-[700px] mx-auto leading-normal">
          Headphones With Good Quality And Affordable Price
        </h1>
      </UpdateFollower>
      </div>
    </div>
  );
};

export default Section;
