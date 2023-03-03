import React, { useEffect, useState } from "react";

import "./Login.css";

function Login() {
 

  useEffect(() => {
    if (s) {
      // maybe trigger a loading screen
      return;
    }
    if (s) navigate("/dashboard");
  }, []);

  return (
    <div className="login">
      
    </div>
  );
}

export default Login;