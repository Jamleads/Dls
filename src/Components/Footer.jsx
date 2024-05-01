// import { footerLinks } from "../Utilities/Data";
// import { FaArrowRight } from "react-icons/fa6";
import { TiSocialLinkedin, TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
const Footer = () => {
  return (
    <>
      <div>
        {/* <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-5 py-10 border-b-2 border-borderColor md:w-[80%] mx-auto md:px-0 px-5">
          <div className="md:w-3/5 flex md:flex-row flex-col md:gap-0 gap-8">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="md:w-1/3 flex flex-col gap-3"
            >
              <p className="font-bold text-2xl">Product</p>
              <ul className="flex flex-col gap-1">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="md:w-1/3 flex flex-col gap-3"
            >
              <p className="font-bold text-2xl">Product</p>
              <ul className="flex flex-col gap-1">
                {footerLinks.information.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="md:w-1/3 flex flex-col gap-3"
            >
              <p className="font-bold text-2xl">Product</p>
              <ul className="flex flex-col gap-1">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="md:w-2/5 bg-[#ffffff1f] p-10 flex flex-col gap-3"
          >
            <p className="font-bold text-2xl">Subscribe</p>

            <div className="flex">
              <input
                type="text"
                placeholder="Email address"
                className="md:w-[85%] bg-white rounded-l-lg px-4 text-mainBlue"
              />
              <div className="md:w-[15%] h-[50px] bg-mainBlue flex items-center justify-center rounded-r-lg">
                <FaArrowRight />
              </div>
            </div>

            <p className="text-xs">
              Hello, we are Dls. Pushing Deep Learning boundaries, innovating
              algorithms, and models to solve complex challenges, unlocking new
              AI possibilities for global impact.
            </p>
          </div>
        </div> */}

        <div className="flex items-center md:flex-row flex-col justify-center md:justify-between md:w-[80%] mx-auto md:px-0 px-5 py-5 gap-5">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" className="w-[150px]" />
            </Link>
          </div>

          {/* <div className="footerNav">
            <ul className="flex items-center gap-5">
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Poilicy</a>
              </li>
              <li>
                <a href="">Cookies</a>
              </li>
            </ul>
          </div> */}

          <div className="socials flex justify-end gap-5">
            <div className="w-[40px] h-[40px] bg-transparent rounded-full border-[1px] flex items-center justify-center text-white">
              <a href="">
                <TiSocialLinkedin />
              </a>
            </div>
            <div className="w-[40px] h-[40px] bg-transparent rounded-full border-[1px] flex items-center justify-center text-white">
              <a href="">
                <TiSocialFacebook />
              </a>
            </div>
            <div className="w-[40px] h-[40px] bg-transparent rounded-full border-[1px] flex items-center justify-center text-white">
              <a href="">
                <RiTwitterXLine />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
