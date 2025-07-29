import { useEffect } from "react";
import "./App.css";

const tg = (
  window as unknown as {
    Telegram: {
      WebApp: {
        ready: () => void;
        close: () => void;
      };
    };
  }
).Telegram.WebApp;

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
