import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-700">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section - Copyright */}
        <p className="text-sm md:text-base text-center md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">DayBook</span>. All Rights Reserved.
        </p>

        {/* Center Section - Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex gap-4">

          {/* GitHub */}
          <span
            onClick={() => window.open("https://github.com/abhishek-italiya", "_blank")}
            className="hover:text-white transition cursor-pointer"
          >
            <Github size={20} />
          </span>

          {/* LinkedIn */}
          <span
            onClick={() => window.open("https://www.linkedin.com/in/abhishek-italiya-765a20298", "_blank")}
            className="hover:text-white transition cursor-pointer"
          >
            <Linkedin size={20} />
          </span>

          {/* Email */}
          <a
            href="mailto:italiyaabhi@gmail.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
