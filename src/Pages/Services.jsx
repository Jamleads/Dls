import { useEffect, useState } from "react";
import { Earth3d, GradientPink } from "../assets";
import { serviceSection1, serviceSection2 } from "../Utilities/Data";

const Services = () => {
  const [selectedService, setSelectedService] = useState(serviceSection2[0]);
  const [activeService, setActiveService] = useState(
    serviceSection2[0]?.id || null
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("default", activeService);

  const pickService = (item) => {
    setSelectedService(item);
    setActiveService(item?.id);
  };
  return (
    <>
      <section>
        <div className="md:w-[90%] mx-auto gap-10 flex flex-col md:flex-row md:items-center justify-between mt-40 md:px-0 px-5">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="md:w-1/3"
          >
            <div className="text-[50px] font-bold">Services</div>
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
              Our company offers a suite of integrated IT services designed to
              optimize business operations and drive digital transformation. We
              specialize in IT Service Management, streamlining processes to
              enhance efficiency and customer satisfaction. Our Business Service
              Management Transformation solutions provide strategic guidance and
              implementation support, facilitating organizational change and
              alignment with business objectives. We develop customized Business
              Service Management Roadmaps to chart a clear path towards improved
              performance and value realization.
            </p>
            <p>
              In addition, our expertise extends to Enterprise System
              Management, ensuring the seamless operation of critical business
              systems. Through our Software Development services, we deliver
              tailored solutions to address unique business challenges and
              capitalize on emerging opportunities. Moreover, our Azure Cloud
              Infrastructure Transformation solutions enable organizations to
              leverage the power of cloud computing for enhanced scalability,
              agility, and cost-efficiency. With a focus on innovation and
              collaboration, we partner with clients to understand their
              specific needs and deliver sustainable IT solutions that drive
              long-term success and competitive advantage in todays dynamic
              digital landscape.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:w-[90%] md:px-0 px-5 mx-auto my-40">
          <img
            src={GradientPink}
            alt=""
            className=" absolute w-[500px] -z-10"
          />
          <h1 data-aos="zoom-down" className="text-center text-3xl">
            Our offerings
          </h1>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-10">
            {serviceSection1.slice(0, 4).map((item, index) => (
              <div
                data-aos="flip-left"
                data-aos-duration="2000"
                key={index}
                className="dCard bg-[#2528354D] rounded-lg"
              >
                <div className="page1 flex flex-col items-center justify-center gap-5 p-5">
                  <img src={item.image} alt="" className="w-[50%] mx-auto" />
                  <p className={`w-[50%] h-[2px] ${item.line}`}></p>
                  <p className="text-center">{item?.title}</p>
                </div>

                <div className="details w-full h-full p-5 page2 text-center flex items-center justify-center">
                  <p>{item?.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:w-3/4 mx-auto grid md:grid-cols-3 grid-cols-1 gap-5 my-5">
            {serviceSection1.slice(4, 7).map((item, index) => (
              // <div
              //   data-aos="flip-left"
              //   data-aos-duration="2000"
              //   key={index}
              //   className="flex flex-col items-center justify-center gap-5 p-5 bg-[#2528354D] rounded-lg"
              // >
              //   <img src={item.image} alt="" className="w-[50%] mx-auto" />
              //   <p className={`w-[50%] h-[2px] ${item.line}`}></p>
              //   <p className="text-center">{item?.title}</p>
              // </div>

              <div
                data-aos="flip-left"
                data-aos-duration="2000"
                key={index}
                className="dCard bg-[#2528354D] rounded-lg"
              >
                <div className="page1 flex flex-col items-center justify-center gap-5 p-5">
                  <img src={item.image} alt="" className="w-[50%] mx-auto" />
                  <p className={`w-[50%] h-[2px] ${item.line}`}></p>
                  <p className="text-center">{item?.title}</p>
                </div>

                <div className="details w-full h-full p-5 page2 text-center flex items-center justify-center">
                  <p>{item?.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section>
        <div className="lg:w-[80%] md:px-0 px-5 mx-auto my-40 md:flex">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="md:w-1/3"
          >
            <div className="md:w-[70%] flex flex-col gap-3">
              {serviceSection2?.map((item, index) => (
                <div key={index}>
                  <p
                    onClick={() => pickService(item)}
                    className={` ${
                      activeService === item.id
                        ? "bg-[#071E60]"
                        : "hover:bg-[#071E60]"
                    } border-[2px] border-[#252525] px-2 py-1 rounded-md cursor-pointer
                    `}
                  >
                    {item?.title}
                  </p>
                  {selectedService && activeService === item.id ? (
                    <div className="bg-[#282A37] px-5 rounded-lg serviceOnMobile mt-1">
                      <p className="py-3 border-b-[2px] border-[#313342]">
                        {selectedService?.title}
                      </p>
                      <p className="py-3">{selectedService?.details}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="md:w-2/3 bg-[#282a376d] px-10 rounded-lg serviceDetails"
          >
            <p className="py-3 border-b-[2px] border-[#313342]">
              {selectedService?.title}
            </p>
            <p className="py-3">{selectedService?.details}</p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Services;
