import { Markup, Telegraf } from "telegraf";

const bot = new Telegraf("7673434017:AAGxyB9KyTtzArgvJjj5dPj0hgqNnxeRfJo");

// Обработчик команды /start
bot.start(async (ctx) => {
  await ctx.reply(
    "Inline keyboard example",
    Markup.keyboard([
      Markup.button.webApp(
        "Сделать заказ",
        "https://miniapp-tg-rho.vercel.app/"
      ),
    ])
  );
});

// Обработчик данных из WebApp
bot.use(async (ctx, next) => {
  if (ctx.webAppData!.data.text()) {
    try {
      const data = ctx.webAppData!.data.text();

      console.log("Полученные данные:", data);

      // Отправляем ответ пользователю
      await ctx.reply(`Получены данные:\n${data}`);
    } catch (error) {
      console.error("Ошибка обработки данных:", error);
      await ctx.reply("Произошла ошибка при обработке данных");
    }
  }
  await next();
});

bot.launch();
