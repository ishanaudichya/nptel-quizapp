import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
function Notfound() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Navbar />
        <h1>Not Found</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </div>
    </>
  );
}

export default Notfound;
