import { messenger_reply_user_data_path } from "./messenger_reply_user_data_path.mjs";
export async function messenger_reply_puppeteer(lambda$page) {
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: messenger_reply_user_data_path(),
    protocolTimeout: 120000,
  });
  const page = await browser.newPage();
  try {
    await lambda$page(page);
  } finally {
    await browser.close();
  }
  return page;
}
