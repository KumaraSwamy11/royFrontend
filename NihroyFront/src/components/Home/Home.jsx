import buildingImage from "../../images/building.jpg";

export default function Home() {
  return (
    <div className="bg-gray-50 shadow-lg py-12">
      <div className="container mx-auto px-4">
        {/* First Div- Quote and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Quote Section */}
          <div className=" text-center md:text-left">
            <h2 className="text-2xl font-semibold text-slate-600 mb-4 md:text-6xl">
              Connecting you with reliable Builders and Agents near you
            </h2>
          </div>
          {/* Image sectionn "flex justify-center md:justify-start"*/}
          <div className="flex justify-center md:justify-start">
            <img
              src={buildingImage}
              alt="Real Estate"
              className="w-72 h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second Div - For Builders */}
        <div className="mt-12 text-center md:text-left">
          <h3 className="text-3xl font-semibold text-slate-600 mb-4 md:text-6xl">
            For Builders
          </h3>

          <h3 className="text-2xl font-semibold text-slate-500 mb-4">
            Showcase your ongoing and completed projects.
          </h3>
          <p className="text-xl text-gray-400 mb-6">
            Register now and get noticed by potential clients!!
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-r-md">
              Register as Builder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
