import { useEffect } from "react";
import "./App.css";

const tg = (window as unknown).Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close();
  };
  return (
    <div>
      work <button onClick={onClose}></button>
    </div>
  );
}

export default App;
