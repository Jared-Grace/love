import { youtube_studio_user_data_path } from "./youtube_studio_user_data_path.mjs";
export async function youtube_studio_sign_in() {
  "Opens youtube studio in the browser profile the uploader uses, and waits until the person has signed in and closed the window.";
  "★ THE PERSON SIGNS IN, NEVER THE PROGRAM. A password typed by a program is a password stored somewhere a program can read it; a person signing in once into a kept profile stores nothing but the browser's own session.";
  "It waits for the window to be closed rather than for some sign of being signed in, because closing is the one thing a person does only when they are finished - a page that merely looks signed in can still be halfway through choosing an account.";
  let puppeteer = await import("puppeteer");
  let browser = await puppeteer.launch({
    headless: false,
    userDataDir: youtube_studio_user_data_path(),
    defaultViewport: null,
  });
  let pages = await browser.pages();
  let page = pages[0];
  await page.goto("https://studio.youtube.com");
  await new Promise(function lambda(resolve) {
    let r = browser.on("disconnected", resolve);
    return r;
  });
  let r2 = {
    closed: true,
  };
  return r2;
}
