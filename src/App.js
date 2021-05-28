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
        <h1>hello world</h1>
        <button onClick={() => setBtnPop(true)}>Open Popup</button>
        <Popup trigger={btnPop} setTrigger={setBtnPop}>
          <h3>My Popup</h3>
        </Popup>
        <Popup trigger={timePop} setTrigger={setTimePop}>
          <h3>My Time Popup</h3>
        </Popup>
      </main>
    </div>
  );
}

export default App;
