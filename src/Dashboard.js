import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        
      </div>
    </div>
  );
}

export default Dashboard;