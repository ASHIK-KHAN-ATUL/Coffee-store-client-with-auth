import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-[#b6b3aa]">
          <div className="  text-white flex p-10 footer justify-around">
              <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>

          <div className="flex  justify-center gap-5 text-xl">

            <NavLink className="bg-white p-2 rounded-full">
              <IoLogoFacebook></IoLogoFacebook>
            </NavLink>

            <NavLink className="bg-white p-2 rounded-full">
                 <FaGithub></FaGithub>
            </NavLink>

            <NavLink className="bg-white p-2 rounded-full">   
              <FaTwitter></FaTwitter>
            </NavLink>

            <NavLink className="bg-white p-2 rounded-full">   
              <FiInstagram></FiInstagram>
            </NavLink>
         
          </div>

          <footer className="footer footer-center  text-white p-4">
              <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Lingo Bingo</p>
              </aside>
          </footer>
      </footer>

    );
};

export default Footer;