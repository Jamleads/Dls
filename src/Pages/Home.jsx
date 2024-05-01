import { homeSection1 } from "../Utilities/Data";
import { useEffect, useState } from "react";
import { clients } from "../Utilities/Data";
import { GradientYellow } from "../assets";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(0);
  const showCaseContent =
    "Improving IT Service Delivery through Process Excellence";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const animateTyping = () => {
      for (let i = 0; i <= showCaseContent.length; i++) {
        setTimeout(() => {
          setIndex(i);
        }, i * 150);
      }
    };
    animateTyping();
    const totalAnimationDuration = showCaseContent.length * 150;
    const repeatInterval = setInterval(() => {
      animateTyping();
    }, totalAnimationDuration + 2000);
    return () => {
      clearInterval(repeatInterval);
    };
  }, [showCaseContent]);

  return (
    <>
      <section className="hero flex items-center justify-center">
        <div className="hero-content md:w-[70%] text-center flex flex-col items-center justify-center gap-5">
          <h1
            data-aos="fade-up"
            data-aos-duration="300"
            className="md:text-[70px] text-[50px] font-bold"
          >
            Deep Learning Science
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="md:text-2xl text-xs"
          >
            {showCaseContent.slice(0, index)}
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="flex items-center gap-5"
          >
            <Link to="/contact">
              <Button btnText={"Contact Us"} />
            </Link>

            <Link to="/services">
              <Button btnText={"Learn More"} btnStyle={"bg-transparent"} />
            </Link>
          </div>
        </div>
      </section>

      <secton className="client">
        <h1 className="text-center mt-20 font-bold text-[30px]">
          Trusted by various clients
        </h1>
        <div className="">
          <div className="flex flex-col gap-5 py-20">
            <div className="w-full overflow-x-auto">
              <div className="over overTop w-[100%]">
                {clients.map((company) => (
                  <div
                    key={company.id}
                    className="child-container flex items-center justify-center"
                  >
                    <img src={company.logo} alt="" />
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="overDownCon">
              <div className="over overDown w-[100%]">
                {clients
                  .sort((a, b) => b.id - a.id)
                  .map((company) => (
                    <div
                      key={company.id}
                      className="child-container flex items-center justify-center"
                    >
                      <img src={company.logo} alt="" />
                    </div>
                  ))}
              </div>
            </div>

            <div className="w-full overflow-x-auto">
              <div className="over overTop w-[100%]">
                {clients.map((company) => (
                  <div
                    key={company.id}
                    className="child-container flex items-center justify-center"
                  >
                    <img src={company.logo} alt="" />
                  </div>
                ))}
              </div>
            </div>

            <div className="overDownCon">
              <div className="over overDown w-[100%]">
                {clients.map((company) => (
                  <div
                    key={company.id}
                    className="child-container flex items-center justify-center"
                  >
                    <img src={company.logo} alt="" />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </secton>

      <section>
        <div className="md:w-[90%] my-20 mx-auto flex flex-col gap-10 md:px-0 px-5 relative">
          <img
            src={GradientYellow}
            alt=""
            className="blue absolute top-0 right-0 -z-10"
          />
          <img
            src={GradientYellow}
            alt=""
            className="blue absolute top-0 left-0 -z-10"
          />
          <p
            data-aos="zoom-in-up"
            className="md:text-center md:w-[70%] mx-auto text-[20px]"
          >
            At Deep Learning Science, we have specialist IT consultants backed
            up by specialist business consultants. Our mission is to, enhance
            your organizations performance, productivity and profitability
            through pertinent IT choices, then to implement these choices with
            you. By being unique partners who can both advise on and implement
            solutions, we enable our cli ents to:
          </p>

          <div className="flex lg:flex-row flex-col items-center gap-10">
            {homeSection1.map((item, index) => (
              <div
                data-aos="flip-left"
                data-aos-duration="3000"
                key={index}
                className="lg:w-1/3 w-full h-[450px] p-10 flex flex-col items-center justify-center gap-10 shadow-xl bg-[#2528354D] hover-effect"
              >
                <div className="w-[130px] h-[130px] flex items-center justify-center">
                  <img src={item.image} alt="iconn" className="w-full" />
                </div>

                <h1 className=" text-3xl text-white font-bold uppercase">
                  {item.title}
                </h1>

                <div className="w-[50%] mx-auto bg-[#ec8387] text-[1px] text-[#ec8387]">
                  ok
                </div>

                <p className=" text-center text-lg">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="reviews flex items-center justify-center flex-col gap-8 bg-[#252835] py-10 md:px-0 px-5">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          className="md:w-[60%] mx-auto text-center flex items-center justify-center flex-col gap-3"
        >
          <h1 className=" font-bold text-3xl">What our customers say</h1>
          <p className="text-[#B7B7B7]">
            Discover what our clients have to say about their experience with
            us. Read testimonials from satisfied customers who have benefited
            from our services and see how we have helped businesses like yours
            achieve their goals.
          </p>
        </div>

        <div
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          className="w-[75%] mx-auto grid md:grid-cols-3 grid-rows-1 gap-5"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="img_wrap">
              <img src={TwitterReviews} alt="twitterRecies" />
            </div>
          ))}
        </div>
      </section> */}

      <section className="my-20">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="innovate md:w-[60%] mx-auto py-3 px-10 md:flex items-center justify-between"
        >
          <div className="md:w-[70%]">
            <p className="text-2xl">
              Innovative solutions for your digital success. Partner with us
              today!
            </p>
          </div>

          <div className="md:w-[30%] flex md:justify-end justify-center">
            <Link to="/contact">
              <Button
                btnText={"Contact Us"}
                btnStyle={" bg-[#F5F5F5] !text-[#474747]"}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
