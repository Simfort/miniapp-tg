import { useEffect } from "react";
import "./App.css";

const tg = (
  window as unknown as {
    Telegram: {
      WebApp: {
        ready: () => void;
        close: () => void;
        initDataUnsafe: {
          user: {
            username: string;
          };
        };
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
      Hello {tg.initDataUnsafe?.user?.username}{" "}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
