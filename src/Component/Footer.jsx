import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import image from "../assets/credit-cards.webp"

const Footer = () => {
  const items = [
    { title: "Home" },
    { title: "About" },
    { title: "Contact us" },
    { title: "Privacy Policy" },
  ];
  return (
    <div className="bg-[#aa6c6a]  px-12 md:px-12 pt-[3rem]">
      <div className="container text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b-2">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">Playing</h1>
            <p className=" text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores
            </p>
           <div>
           <p className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+1 (123) 456-7890</span>
            </p>
            <p className="flex items-center gap-2 mb-8">
              <FaMapMarkedAlt />
              <span>Noida, Uttar Pradesh</span>
            </p>
           </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div>
                  {items.map((data, index) => (
                    <ul key={index} className="space-y-2">
                      <li className="pt-2">{data.title}</li>
                    </ul>
                  ))}
                </div>
                <div>
                  {items.map((data, index) => (
                    <ul key={index} className="space-y-2">
                      <li className="pt-2">{data.title}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Follow Us</h1>
                <p className="flex items-center gap-3 py-6 text-3xl"><FaFacebook /><FaInstagram /><FaTelegram /><FaGoogle /></p>
                <div>
                    <p>Payment Methods</p>
                    <img src={image} alt="" className="pt-3"/>
                </div>
            </div>
          </div>
        </div>
        <div className="text-center p-8">
            <p>© 2024. All Rights Reserved || The Coding Journey</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
