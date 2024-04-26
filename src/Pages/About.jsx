import {
  Earth3d,
  GoalImage,
  GradientPink,
  MissionImage,
  VisionImage,
} from "../assets";
import { aboutUsSection } from "../Utilities/Data";
import Button from "../Components/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="md:w-[90%] mx-auto gap-10 flex flex-col md:flex-row md:items-center justify-between mt-40 md:px-0 px-5">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="md:w-1/3"
          >
            <div className="text-[50px] font-bold">About Us</div>
            <div className="flex items-center justify-center">
              <img src={Earth3d} alt="earthIcon" className="w-[85%]" />
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="md:w-2/3 flex flex-col gap-3"
          >
            <p className="">
              From concept to solutions, design to planning for functional
              production issues, Design Enablement takes a human-centered
              approach to solving business challenges while creating a positive
              experience for end-users.
            </p>
            <p>
              At the same time, we advise on achieving Agile Transformation to
              enhance the effectiveness of design and development capabilities
              and applying the developer operations (Dev Ops) framework to build
              and release software quickly and more incrementally, without
              compromising service, quality or security.
            </p>
            <p>
              Our approach reframes software as a product that lives within a
              broader ecosystem of offerings. It can speed entry to market and
              help maximize value from new releases while strengthening your
              overall portfolio.
            </p>
            <p>
              A successful organization in the digital age is one that embraces
              change and makes continual evolution an asset and way of life.
              Cultural Transformation is therefore a key part of Deep Learning
              Science services, helping instill the kind of innovative,
              entrepreneurial, creative culture found in companies
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="md:w-[60%] my-20 mx-auto md:px-0 px-5 flex flex-col gap-10">
          <div className="flex md:flex-row flex-col items-center justify-between gap-10">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="md:w-1/2"
            >
              <img src={VisionImage} alt="" />
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="md:w-1/2"
            >
              <div className="flex flex-col gap-5 mb-5">
                <h1 className="text-3xl font-bold">Vision of DLS</h1>
                <p className="">
                  To pioneer transformative advancements in Deep Learning
                  Science, empowering businesses and individuals alike through
                  cutting-edge technology solutions.
                </p>
              </div>
              <Link to="/contact">
                <Button btnText={"Contact Us"} />
              </Link>
            </div>
          </div>

          <div className="flex md:flex-row-reverse flex-col items-center justify-between gap-10 relative">
            <img
              src={GradientPink}
              alt=""
              className=" absolute top-10 right-0 w-[700px] -z-10"
            />
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="md:w-1/2"
            >
              <img src={MissionImage} alt="" />
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="md:w-1/2"
            >
              <div className="flex flex-col gap-5 mb-5">
                <h1 className="text-3xl font-bold">Mission of DLS</h1>
                <p className="">
                  Our mission is to harness the power of Deep Learning Science
                  to drive innovation, efficiency, and progress in every sphere
                  of human endeavor. Through relentless research, development,
                  and collaboration, we strive to deliver state-of-the-art IT
                  solutions that redefine possibilities, enhance
                  decision-making, and foster sustainable growth for our clients
                  worldwide.
                </p>
              </div>
              <Link to="/contact">
                <Button btnText={"Contact Us"} />
              </Link>
            </div>
          </div>

          <div className="flex md:flex-row flex-col items-center justify-between gap-10">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="md:w-1/2"
            >
              <img src={GoalImage} alt="" />
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="md:w-1/2"
            >
              <div className="flex flex-col gap-5 mb-5">
                <h1 className="text-3xl font-bold">Goal of DLS</h1>
                <p className="">
                  Our goal is to continuously push the boundaries of Deep
                  Learning Science, striving for breakthroughs that drive
                  tangible impact across industries. Through rigorous research,
                  experimentation, and application, we aim to develop
                  state-of-the-art algorithms, models, and systems that address
                  complex challenges and unlock new possibilities in artificial
                  intelligence.
                </p>
              </div>
              <Link to="/contact">
                <Button btnText={"Contact Us"} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="md:w-[90%] my-20 mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 md:px-0 px-5 relative">
          <img
            src={GradientPink}
            alt=""
            className=" absolute bottom w-[700px] -z-10"
          />
          {aboutUsSection.map((item, index) => (
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              key={index}
              className="flex flex-col items-center justify-center gap-5 py-10 px-8 bg-[#2528354D]"
            >
              <img src={item.image} alt="" />
              <p className={`w-[50%] h-[5px] ${item.linr}`}></p>
              <p className="text-center">{item.details}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
