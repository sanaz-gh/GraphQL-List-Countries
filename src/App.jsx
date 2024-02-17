import Layout from "./layouts/Layout";
import Countries from "./components/Countries";
import Search from "./components/Search";



function App() {

  return (
    <>
    <Layout>
    <Search />
    <Countries/>
    </Layout>
    </>
  );
}

export default App;
