import Layout from "./layouts/Layout";
import Countries from "./components/Countries";
import Search from "./components/Search";
import Demo from "./components/Demo";



function App() {

  return (
    <>
    <Layout>
    {/* <Search /> */}
    <Demo/>
    <Countries/> 
    </Layout>
    </>
  );
}

export default App;
