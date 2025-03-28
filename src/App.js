import Header from './components/header';
import './App.css';
import Footer from './components/footer';
import Banner from './pages/banner';
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [themeSettting, setThemeSettting] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchThemeSetting = async () => {
    setLoading(true);
    try {
      const url =
        "https://websiteapi.agorareal.com/wp-json/agora/v1/fetch-theme-setting";
      const response = await axios.get(url);
      if (response.data) {
        setThemeSettting(response.data);
      }
    } catch (error) {
      console.log("Error fetching theme setting:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThemeSetting();
  }, []);

  return (
    <div className="App">
      <Header themeSettting={themeSettting} loading={loading} />
      <Banner />
      {/* Passing themeSettting as a prop to Footer */}
      <Footer themeSettting={themeSettting} loading={loading} />
    </div>
  );
}

export default App;
