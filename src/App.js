import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Layout from "./layout";
import CovidIndonesia from "./pages/covid/Indonesia";
import CovidProvinsi from "./pages/covid/Provinsi";
import Home from "./pages/Home";
import theme from "./utils/constants/themes";
import data from './utils/constants/provinces'


function App() {
  const [provinces,setProvinces] = useState(data.provinces)

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/covid/indonesia" element={<CovidIndonesia />} />
            <Route path="/covid/provinsi" element={<CovidProvinsi provinces={provinces} setProvinces={setProvinces} />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
