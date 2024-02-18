import Layout from "./layouts/Layout";
import Countries from "./components/Countries";
import Search from "./components/Search";
import Demo from "./components/Demo";
import { useState } from "react";



function App() {


  const [collabs, setCollabs] = useState("");

  return (
    <>
    <Layout>
    {/* <Search /> */}
    <Demo setCollabs={setCollabs} />
    <Countries/> 
    </Layout>
    </>
  );
}

export default App;
