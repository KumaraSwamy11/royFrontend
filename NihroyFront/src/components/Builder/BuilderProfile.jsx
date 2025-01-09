import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BuilderProfile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const token = localStorage.getItem("authToken");
  const [builderId, setBuilderId] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        setBuilderId(decoded.id);
      } catch (err) {
        setError("Invalid token format");
      }
    } else {
      setError("Authorization token not found");
    }
  }, [token]);

  // if (token) {
  //   const builderId = decoded.id; // Extract the builder ID
  //   console.log("Builder ID:", builderId);
  // }

  const navigate = useNavigate();

  //Fetch builder profile on component form
  useEffect(() => {
    const fetchBuilderProfile = async () => {
      if (!builderId) return; // Wait for builderId to be set

      // if (!token) {
      //   setError("Authorization token not found");
      //   return;
      // }

      try {
        const response = await axios.get(
          `http://localhost:8084/api/builders/${builderId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("API Response Data:", response.data); // Debug log

        setProfile(response.data);
      } catch (err) {
        console.log("API response:", response.data); // Debug log for API response

        setError(err.response?.data || "Failed to Load Profile");
      }
    };
    fetchBuilderProfile();
  }, [builderId, token]);

  if (error) {
    return (
      <div className="text-center text-red=500 font-semibold mt10">{error}</div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center text-gray-500 font-semibold mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 md:mb-0">
          <img
            src={`http://localhost:8084/uploads/${profile.photoPath}`}
            alt={profile.name}
            className="w-full h-full object-cover"
            onError={(e) => (e.target.src = "/placeholder.png")} // Fallback image
          />
        </div>
        <div className="md:ml-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {profile.name}
          </h1>
          <p className="text-gray-600 text-lg mb-1">
            <span className="font-semibold">Experience:</span>{" "}
            {profile.experience} years
          </p>
          <p className="text-gray-600 text-lg mb-1">
            <span className="font-semibold">Address:</span> {profile.address}
          </p>
          <p className="text-gray-600 text-lg mb-1">
            <span className="font-semibold">City:</span> {profile.city}
          </p>
          <p className="text-gray-600 text-lg mb-1">
            <span className="font-semibold">WhatsApp:</span>{" "}
            {profile.whatsappNumber}
          </p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow"
          onClick={() => navigate("/add-project")}
        >
          Add Project
        </button>
      </div>
    </div>
  );
}

// <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
//   <div className="flex flex-col items-center">
//     <img
//       src={`http://localhost:8084/uploads/${profile.photoPath}`}
//       alt={profile.name}
//       className="w-32 h-32 rounded-full object-cover mb-4"
//     />
//     <h1 className="text-2xl font-bold text-gray-800 mb-2">
//       {profile.name}
//     </h1>

//     <p className="text-gray-600 text-lg">
//       <span className="font-semibold">Experience:</span>{" "}
//       {profile.experience} years
//     </p>
//     <p className="text-gray-600 text-lg">
//       <span className="font-semibold">Address:</span> {profile.address}
//     </p>
//     <p className="text-gray-600 text-lg">
//       <span className="font-semibold">City:</span> {profile.city}
//     </p>
//     <p className="text-gray-600 text-lg">
//       <span className="font-semibold">WhatsApp:</span>{" "}
//       {profile.whatsappNumber}
//     </p>
//   </div>
//   <div className="mt-6 text-center">
//     <button
//       className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
//       onClick={() => console.log("Navigate to Add Project")}
//     >
//       Add Project
//     </button>
//   </div>
// </div>
