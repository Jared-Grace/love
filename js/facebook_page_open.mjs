import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
import { facebook_page_user_data_path } from "./facebook_page_user_data_path.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_page_open(url) {
  "$plain url";
  "Opens a facebook address with no window in the signed-in page profile and answers the browser and the page. The caller closes the browser.";
  "It waits up to two minutes for a page: on 2026-10-19 facebook's own page took longer than thirty seconds, twice running.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let puppeteer = await import("puppeteer");
  let browser = await puppeteer.launch({
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
  let pages = await browser.pages();
  let page = pages[0];
  page.setDefaultTimeout(120000);
  let agent = await browser.userAgent();
  let v = agent.replace("HeadlessChrome", "Chrome");
  await page.setUserAgent(v);
  ("★ A PAGE THAT FAILS TO LOAD CLOSES THE BROWSER HERE, because the caller is never handed it and so cannot. On 2026-10-26 the internet dropped during a reel check; the browser stayed open, the run never exited, and its hold on the one profile would have refused every later run.");
  try {
    await page.goto(url);
  } catch (e) {
    await browser.close();
    throw e;
  }
  await sleep(6000);
  let r = {
    browser,
    page,
  };
  return r;
}
