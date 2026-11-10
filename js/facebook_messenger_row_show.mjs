import { facebook_page_lock_take } from "./facebook_page_lock_take.mjs";
import { facebook_browser_shared_close_held } from "./facebook_browser_shared_close_held.mjs";
import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
import { facebook_page_user_data_path } from "./facebook_page_user_data_path.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_row_open } from "./facebook_messenger_row_open.mjs";
export async function facebook_messenger_row_show(url) {
  "$plain url";
  "Opens the signed-in page profile in a window a person can see, clicks the messenger conversation at url in the chat list for them, and waits until they close the window. It reads nothing and sends nothing.";
  "★ A CLICK, NEVER THE ADDRESS: on 2026-11-08 the conversation's own address showed only 'Facebook user' in this same profile, while clicking its row in the list loaded every message.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let id = url.match(/\/t\/(\d+)/)[1];
  let lock = await facebook_page_lock_take();
  let puppeteer = await import("puppeteer");
  let browser = null;
  try {
    ("★ THE BROWSER KEPT OPEN IN THE PROFILE IS ENDED FIRST: chrome allows one browser per profile, and this one has a window.");
    await facebook_browser_shared_close_held();
    browser = await puppeteer.launch({
      headless: false,
      executablePath: youtube_studio_chrome_path(),
      ignoreDefaultArgs: ["--enable-automation"],
      userDataDir: facebook_page_user_data_path(),
      defaultViewport: null,
      protocolTimeout: 600000,
    });
  } catch (e) {
    lock.kill();
    throw e;
  }
  let closed = new Promise(function lambda(resolve) {
    browser.once("disconnected", resolve);
  });
  let clicked = false;
  try {
    let pages = await browser.pages();
    let page = pages[0];
    page.setDefaultTimeout(120000);
    await page.goto("https://www.facebook.com/messages/");
    await sleep_human_pace();
    clicked = await facebook_messenger_row_open(page, id);
  } catch (e) {
    await browser.close();
    lock.kill();
    throw e;
  }
  await closed;
  lock.kill();
  let r = {
    clicked,
    closed: true,
  };
  return r;
}
