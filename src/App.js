import Popup from "./Popup";
import { useState, useEffect } from "react";

function App() {
  const [btnPop, setBtnPop] = useState(false);
  const [timePop, setTimePop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimePop(true);
    }, 3000);
  }, []);
  return (
    <div className="App">
      <main>
        <h1>Pop-up</h1>
        <button onClick={() => setBtnPop(true)}>Open Popup</button>
        <Popup trigger={btnPop} setTrigger={setBtnPop}></Popup>
        <Popup trigger={timePop} setTrigger={setTimePop}></Popup>
      </main>
    </div>
  );
}

export default App;
