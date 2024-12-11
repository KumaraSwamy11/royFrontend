import React from "react";

import img1 from "../../imgChos/Research.png";
import img2 from "../../imgChos/product.png";
import img3 from "../../imgChos/trustr.png";
import img4 from "../../imgChos/find.png";

export default function Choose() {
  const handleSearch = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  return (
    // "bg-gradient-to-r from-blue-50 to-teal-50 py-16 mt-6"
    <div className="bg-gray-50 shadow-sm py-12 mt-4">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 tracking-tight">
          Why Choose Nihroy Build
        </h2>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/*Step 1 */}
          <div className="text-center transform transition duration-500 hover:scale-105">
            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
              <img
                src={img1}
                alt="Register"
                className="mx-auto w-24 h-24 mb-4 transition duration-300 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Register on the Platform
              </h3>

              <p className="text-gray-600 mt-2">
                Sign up quickly to get started with just a few clicks
              </p>
            </div>
          </div>
          {/*Step2 */}
          <div className="text-center transform transition duration-500 hover:scale-105">
            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
              <img
                src={img2}
                alt="Showcase Work"
                className="mx-auto w-24 h-24 mb-4 transition duration-300 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Showcase Your Work Here
              </h3>
              <p className="text-gray-600 mt-2">
                Display your best projects to attract more customers.
              </p>
            </div>
          </div>

          {/*Step 3 */}
          <div className="text-center transform transition duration-500 hover:scale-105">
            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
              <img
                src={img4}
                alt="Find Builders"
                className="mx-auto w-24 h-24 mb-4 transition duration-300 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Find Reliable Professionals
              </h3>
              <p className="text-gray-600 mt-2">
                Search for trusted builders and agents in your city.
              </p>
            </div>
          </div>

          {/*Step 4 */}
          <div className="text-center transform transition duration-500 hover:scale-105">
            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
              <img
                src={img3}
                alt="Trust Cheap People cant afford it"
                className="mx-auto w-24 h-24 mb-4 transition duration-300 hover:scale-110"
              />

              <h3 className="text-xl font-semibold text-gray-800">
                Secure and Reliable Connections
              </h3>
              <p className="text-gray-600 mt-2">
                Enjoy verified professionals with secure transactions
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={handleSearch}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-r-md"
          >
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
}
