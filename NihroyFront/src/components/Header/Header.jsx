import React, { useState } from "react";
import Logo from "../../images/NihroyLogo.jpg";
import img1 from "../../images/building.png";
import img2 from "../../images/flat.png";
import img3 from "../../images/house.png";
//import img4 from "../../images/skyscraper";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // List of Telangana districts
  const telanganaDistricts = [
    "Adilabad",
    "Bhadradri Kothagudem",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar",
    "Jogulamba",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Komaram Bheem",
    "Mahabubnagar",
    "Mancherial",
    "Medak",
    "Medchal-Malkajgiri",
    "Mahabubabad",
    "Nalgonda",
    "Nirmal",
    "Nizamabad",
    "Peddapalli",
    "Rajanna Sircilla",
    "Rangareddy",
    "Sangareddy",
    "Siddipet",
    "Suryapet",
    "Vikarabad",
    "Warangal Rural",
    "Warangal Urban",
    "Yadadri Bhuvanagiri",
  ];

  //Handle search input and filter districts
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    //Filter districts based on input
    if (value.trim() !== "") {
      const filtered = telanganaDistricts.filter((district) =>
        district.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredDistricts(filtered);
      setShowDropdown(true); //Show dropdown if there are matches
    } else {
      setShowDropdown(false); //Hide dropdown if input is empty
    }
  };

  // Handle focus event to show dropdown
  const handleFocus = () => {
    setShowDropdown(true);
    //Show all districts on focus

    setFilteredDistricts(telanganaDistricts);
  };

  //Handle blur event to hide dropdown when input is not focused
  const handleBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200); //Delay hiding to allow clicking on dropdown items
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-slate-600 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-8 animate-logo-pulse rounded-full"
          />
          <span className="text-white font-bold text-lg ml-2">
            Nihroy Build
          </span>
        </div>

        {/* Hamburger Menu (Visible on Mobile) */}
        <button
          onClick={toggleMenu}
          className="text-white block md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/*Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/about"
            className="text-white text-bold hover:text-yellow-400 transition font-bold"
            activeClassName="text-yellow-400 font-semibold"
          >
            About
          </NavLink>
          <NavLink
            to="/about"
            className="text-white text-bold hover:text-yellow-400 transition font-bold"
            activeClassName="text-yellow-400 font-semibold"
          >
            Register
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-yellow-400  transition font-bold"
            activeClassName="text-yellow-400 font-semibold"
          >
            LogIn
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-slate-600 md:hidden flex flex-col p-4 space-y-4">
          <NavLink
            to="/about"
            className=" text-white  hover:text-yellow-400 font-bold"
            activeClassName="text-yellow-400 font-semibold"
            onClick={() => setMenuOpen(false)} //Close menu on link click
          >
            About
          </NavLink>

          <NavLink
            to="/about"
            className="text-white hover:text-yellow-400 font-bold"
            activeClassName="text-yellow-400 font-semibold"
            onClick={() => setMenuOpen(false)} //Close menu on link click
          >
            Register
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-yellow-400 font-bold"
            activeClassName="text-yellow-400 font-semibold"
            onClick={() => setMenuOpen(false)} //Close menu on link click
          >
            LogIn
          </NavLink>
        </div>
      )}
      <div className=" bg-gray-50 p-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <img
            src={img1}
            alt="Logo"
            className="flex items-center h-14 animate-logo-pulse text-center "
          />

          <img
            src={img3}
            alt="Logo"
            className="flex items-center h-14 animate-logo-pulse text-center "
          />
          <img
            src={img2}
            alt="Logo"
            className="flex items-center h-14 animate-logo-pulse text-center "
          />
        </div>

        <div className="flex items-center justify-center space-x-2">
          <input
            type="text"
            placeholder="Search by city"
            className="w-3/4 p-2 rounded-1-md focus:outline-none bg-slate-200"
            value={searchInput}
            onChange={handleSearchChange}
            onFocus={handleFocus} //Show dropdown when focused
            onBlur={handleBlur} // Hide dropdown when focus is lost
          />

          {/* Dropdown menu */}
          {showDropdown && (
            <ul className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredDistricts.map((district, index) => (
                <li
                  key={index}
                  className="p-2 text-black hover:bg-slate-500 cursor-pointer"
                  onClick={() => {
                    setSearchInput(district);
                    setShowDropdown(false);
                  }}
                >
                  {district}
                </li>
              ))}
            </ul>
          )}

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-r-md">
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
