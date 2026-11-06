import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
export async function next_passage_copied(url) {
  "$plain url";
  "Opens a next-passage link in a fresh browser with no window and answers the words the page copies as it opens - the reading and the link on from it. Those are the words a person who pressed the link would paste, because the page's own Copy button copies the same words.";
  "The clipboard is replaced before the page loads by one that keeps what it is handed, so nothing touches the machine's clipboard. A fresh profile, so no language or size remembered from an earlier visit changes what the link asks for.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let puppeteer = await import("puppeteer");
  let browser = await puppeteer.launch({
    headless: true,
    executablePath: youtube_studio_chrome_path(),
  });
  try {
    let page = await browser.newPage();
    page.setDefaultTimeout(120000);
    await page.evaluateOnNewDocument(
      "Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:function(t){window.love_copied=t;return Promise.resolve()}}})",
    );
    await page.goto(url);
    await page.waitForFunction("typeof window.love_copied === 'string'");
    let text = await page.evaluate("window.love_copied");
    return text;
  } finally {
    await browser.close();
  }
}
