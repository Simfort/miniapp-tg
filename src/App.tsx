import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const tg = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.sendData("hui");
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
