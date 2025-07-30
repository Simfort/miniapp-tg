export function useTelegram() {
  return (
    window as unknown as {
      Telegram: {
        WebApp: {
          ready: () => void;
          close: () => void;
          sendData: (data: unknown) => void;
          initDataUnsafe: {
            user: {
              username: string;
            };
          };
        };
      };
    }
  ).Telegram.WebApp;
}
