import Footer from "./Footer";
import { useEffect, useState } from "react";
import * as vscIcons from "react-icons/vsc";
import * as hi2Icons from "react-icons/hi2";
import { navLinks } from "../Utilities/Data";
import { Link, Outlet, useLocation } from "react-router-dom";
import { GradientPink, GradientYellow, Logo } from "../assets";

const LayOut = () => {
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [prevPathname, setPrevPathname] = useState("");

  useEffect(() => {
    if (prevPathname !== pathname) {
      setMobileNav(false);
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  useEffect(() => {
    setMobileNav(false);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else if (window.scrollY < 100) {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="relative overflow-x-hidden">
      <img
        src={GradientPink}
        alt=""
        className="pink absolute -top-10 w-[700px] -z-10"
      />
      <img
        src={GradientYellow}
        alt=""
        className="blue absolute top-0 right-0 -z-10"
      />
      <img
        src={GradientYellow}
        alt=""
        className="blue absolute bottom-0 right-0 -z-10"
      />
      <img
        src={GradientYellow}
        alt=""
        className="blue absolute bottom-0 left-0 -z-10"
      />

      <div
        className={`${
          scroll || mobileNav ? "bg-mainBlue" : "bg-transparent text-textWhite"
        } fixed left-0 right-0 z-10 ease-in`}
      >
        <div
          className={`py-3 md:px-20 px-5 flex items-center justify-between  bg-transparent`}
        >
          <div className="brnd" data-aos="fade-right">
            <Link to="/">
              <img src={Logo} alt="logo" className="w-[150px]" />
            </Link>
          </div>

          <div className="navLinks" data-aos="fade-left">
            <ul className="flex items-center gap-7 font-bold capitalize text-base">
              {navLinks.map((navLink) => (
                <Link key={navLink.id} to={navLink.to}>
                  <li className="navlink text-[14px]">{navLink.page}</li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="forMobil cursor-pointer">
            <div>
              {mobileNav ? (
                <vscIcons.VscChromeClose
                  className="sidebar-toggle-logo z-50 transition text-white"
                  onClick={openMobileNav}
                />
              ) : (
                <hi2Icons.HiOutlineBars3BottomRight
                  className="transition text-white font-bold text-3xl"
                  onClick={openMobileNav}
                />
              )}
            </div>
          </div>
        </div>

        {mobileNav ? (
          <div className="mobileNav p-5 text-mainWhite">
            <ul className="font-bold capitalize text-base">
              {navLinks.map((navLink) => (
                <Link key={navLink.id} to={navLink.to}>
                  <li className="navlink text-[14px] p-2">{navLink.page}</li>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LayOut;
