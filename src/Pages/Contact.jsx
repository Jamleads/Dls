/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

const Contact = () => {
  const inputStyle =
    "w-full border-[1px] border-[#FFFFFF33] p-2 bg-transparent rounded-lg";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="md:w-[80%] mx-auto md:px-0 px-5 my-40">
        <div
          data-aos="flip-left"
          data-aos-duration="2000"
          className="md:p-10 px-3 py-5 bg-[#2528354D] flex md:flex-row flex-col mg:gap-0 gap-10 rounded-lg"
        >
          <div className="md:w-1/2 flex flex-col gap-10">
            <p className="text-5xl font-bold">
              Ready to unlock growth? <br />
              Contact us at D.L.S.
            </p>
            <p className="md:w-2/3">
              Thank you for your interest in D.L.S. Fill out the form and we'll
              reach back out shortly. D.L.S. We are in North America, UK, EMEA,
              and Africa.
            </p>

            <p className=" text-xs font-light md:w-2/3">
              Locations: North America, UK, EMEA, and Africa.
              info@deeplearningscience.com Tel: +1 832 855 8808
            </p>
          </div>

          <div className="md:w-1/2">
            <form
              action="https://formspree.io/f/mjvnwvng"
              method="POST"
              className="flex flex-col gap-1"
            >
              <div className="md:flex items-center gap-3">
                <div className="md:w-1/2">
                  {/* <label htmlFor="firstName"></label> <br /> */}
                  <input
                    required
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    className={inputStyle}
                  />
                </div>

                <div className="md:w-1/2">
                  {/* <label htmlFor="lastName"></label> <br /> */}
                  <input
                    required
                    type="text"
                    name="lastName"
                    id="nlastNameame"
                    placeholder="Last Name"
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="">
                {/* <label htmlFor="email"></label> <br /> */}
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={inputStyle}
                />
              </div>

              <div>
                {/* <label htmlFor="company"></label> <br /> */}
                <input
                  required
                  type="company"
                  name="company"
                  id="company"
                  placeholder="Company"
                  className={inputStyle}
                />
              </div>

              <div>
                {/* <label htmlFor="subject"></label> <br /> */}
                <input
                  required
                  type="subject"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className={inputStyle}
                />
              </div>

              <div className="">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  className={`${inputStyle} h-[150px]`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-mainBlue text-white py-2 rounded-lg"
              >
                Submit &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
