import { facebook_page_lock_take } from "./facebook_page_lock_take.mjs";
import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
import { facebook_page_user_data_path } from "./facebook_page_user_data_path.mjs";
export async function facebook_page_launch() {
  "Starts a browser with no window in the signed-in facebook profile, once no other run is using it, and answers the browser. The caller closes it; closing it lets the next run in.";
  "★ EVERY RUN THAT OPENS THE PROFILE OPENS IT HERE, so the waiting in turn cannot be forgotten by one of them.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let lock = await facebook_page_lock_take();
  let puppeteer = await import("puppeteer");
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: true,
      executablePath: youtube_studio_chrome_path(),
      ignoreDefaultArgs: ["--enable-automation"],
      userDataDir: facebook_page_user_data_path(),
      defaultViewport: {
        width: 1400,
        height: 1000,
      },
      protocolTimeout: 600000,
    });
  } catch (e) {
    lock.kill();
    throw e;
  }
  function lambda() {
    lock.kill();
  }
  browser.once("disconnected", lambda);
  return browser;
}
