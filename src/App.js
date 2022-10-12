import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import TextAndVideoCard from "./Components/TextAndVideoCard/TextAndVideoCard";

import "./styles/global.scss";
import AppStyles from "./App.module.scss";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['League Spartan', 'Libre Baskerville']
      }
    })
  }, [])

  const endpoint =
    "https://www.lightspeedhq.com/wp-json/lexic/v1/btf_hero_module/btf_hero_module/";
  const [appData, setAppData] = useState();

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setAppData(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [endpoint]);

  return (
    <div className="wrapper">
      <header className={AppStyles.header}>
        <h1>Luminous Green Elephant</h1>
      </header>
      <main>
        {appData && <TextAndVideoCard content={appData} />}
      </main>
    </div>
  );
}

export default App;
