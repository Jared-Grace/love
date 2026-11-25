import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
export async function next_passage_here_copied(url) {
  "$plain url";
  "Opens a link to a passage in a fresh browser with no window, presses Next passage, then presses Copy passage with link to itself, and answers what that copies - the passage after the one url names, with a link back to that same passage. Those are the words a person would paste after doing the same three things by hand.";
  "Each press is followed by waiting for the page to copy again: the page copies on its own as each passage opens, so a fresh copy is the sign the next passage has been drawn before the second press.";
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
    await page.evaluate(
      "window.love_copied=null;[...document.querySelectorAll('button')].find(function(b){return b.textContent.includes('Next passage')}).click()",
    );
    await page.waitForFunction("typeof window.love_copied === 'string'");
    await page.evaluate(
      "window.love_copied=null;[...document.querySelectorAll('button')].find(function(b){return b.textContent.includes('link to itself')}).click()",
    );
    await page.waitForFunction("typeof window.love_copied === 'string'");
    let text = await page.evaluate("window.love_copied");
    return text;
  } finally {
    await browser.close();
  }
}
