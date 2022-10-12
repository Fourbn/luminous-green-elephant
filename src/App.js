import { useEffect, useState } from "react";
import TextAndVideoCard from "./Components/TextAndVideoCard/TextAndVideoCard";

function App() {
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
    <div className="App">
      <header className="App-header">
        <h1>Luminous Green Elephant</h1>
        {appData && <TextAndVideoCard content={appData} />}
      </header>
    </div>
  );
}

export default App;
