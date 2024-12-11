import React from "react";

import imgF from "../../imgFootIcon/facebook.png";
import imgT from "../../imgFootIcon/twitter.png";
import imgI from "../../imgFootIcon/instagram.png";
import imgL from "../../imgFootIcon/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 shadow-sm py-12 mt-4">
      <div className="container  mx-auto flex flex-wrap gap-y-8 md:flex-nowrap md:gap-x-60 justify-evenly px-4">
        {/* About Section */}
        <div className="w-full md:w-1/3 mb-6">
          <h3 className="text-xl font-semibold mb-4">ABOUT US</h3>
          <p>
            Nihroy Build is a platform connecting builders and agents with
            potential clients, eliminating the need for personal referrals. With
            a focus on making the real estate process simple, we enable users to
            find reliable builders and agents, view their ongoing projects, and
            connect directly. Nihroy Build is dedicated to empowering the real
            estate industry with seamless communication and easy access to
            trusted professionals.
          </p>
        </div>
        {/* Connect Section */}
        <div className="w-full md:w-1/3 mb-6">
          <h3 className="text-xl font-semibold mb-4">REACH OUT TO US</h3>
          <ul>
            <li>
              <a
                href="mailto:connect@nihroybuild.com"
                className="text-blue-400"
              >
                connect@nihroybuild.com
              </a>
            </li>
            <li>
              <a
                href="mailto:support@nihroybuild.com"
                className="text-blue-400"
              >
                support@nihroybuild.com
              </a>
            </li>
            <li>
              <a href="nihroybuild@gmail.com" className="text-blue-400">
                nihroybuild@gmail.com
              </a>
            </li>
          </ul>
        </div>
        {/* Social Media Section */}
        <div className="w-full  md:w-1/3 mb-6">
          <h3 className="text-xl font-semibold mb-4">FOLLOW US ONLINE</h3>
          <div className="flex space-x-4">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopeer noreferrer"
            >
              <img src={imgF} alt="Facebook" className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgT} alt="Twitter" className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgI} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgL} alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      {/* Footer Copyright */}
      <div className="bg-slate-50 text-center py-4  bottom-0 w-full">
        <p>&copy; 2024 www.nihroybuild.in. All rights reserved</p>
      </div>
    </footer>
  );
}
