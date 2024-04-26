import { useEffect } from "react";
import { teamDetails } from "../Utilities/Data";
import { GradientBlue, GradientYellow, TeamImage } from "../assets";
import { Link } from "react-router-dom";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mt-40">
        <div className="md:flex items-center justify-between md:w-[80%] mx-auto md-px-0 px-5">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="md:w-1/2"
          >
            <h1 className="md:text-5xl font-bold">Meet Our Team</h1>
            <div className="mt-5">
              <img src={TeamImage} alt="team-image" className="w-[60%]" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="md:w-1/2 "
          >
            The core team and management consist of industry professionals with
            expertise in AI, Blockchain, Software Application development
            Digital Transformation (ITIL / ITSM), Gaming, Financial Services and
            Financial Payment Solutions, Enterprise System management, Cyber
            Security, E-commerce and Internet solutions, Program and Project
            Management methodologies (Agile Scrum experts), Financial Market
            solution technologies, and more.
          </div>
        </div>

        <div className="relative">
          <img
            src={GradientBlue}
            alt=""
            className="blue absolute top-0 left-0 -z-10"
          />
          <img
            src={GradientYellow}
            alt=""
            className="blue absolute top-0 right-0 -z-10"
          />
          <div className="my-40 md:px-0 px-5">
            <div className="lg:w-[80%] mx-auto w-full lg:grid grid-cols-2 flex flex-col gap-5">
              {teamDetails.slice(0, 2).map((team) => (
                <div
                  data-aos="flip-left"
                  data-aos-duration="2000"
                  key={team.id}
                  className="bg-[#2528354D] flex flex-col gap-3 items-center justify-center py-10"
                >
                  <div className="img-wrap w-[250px] h-[250px] flex items-center justify-center rounded-full">
                    <img
                      src={team.image}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-3xl font-bold">{team.fullName}</p>
                    <p className="font-light">{team.role}</p>
                  </div>

                  <div className="flex items-center justify-center mt-5">
                    <Link to={team?.linkedin}>
                      <button className="bg-mainBlue text-white px-5 py-2 rounded-lg">
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 md:w-[80%] mx-auto md:flex items-center justify-center">
              {teamDetails.slice(2).map((team) => (
                <div
                  data-aos="flip-left"
                  data-aos-duration="2000"
                  key={team.id}
                  className="md:w-1/2 bg-[#2528354D] flex flex-col gap-3 items-center justify-center py-10"
                >
                  <div className="img-wrap w-[250px] h-[250px] flex items-center justify-center rounded-full">
                    <img
                      src={team.image}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-3xl font-bold">{team.fullName}</p>
                    <p className="font-light">{team.role}</p>
                  </div>

                  <div className="flex items-center justify-center mt-5">
                    <Link to={team?.linkedin}>
                      <button className="bg-mainBlue text-white px-5 py-2 rounded-lg">
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
