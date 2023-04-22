import React from "react";
import { AuthProvider } from "./Auth";
import Layout from "./components/Layout/Layout";
import Routers from "./routes/Routers";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routers/>
      </Layout>
    </AuthProvider>
  );
}

export default App;
  