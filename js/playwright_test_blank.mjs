import { chromium } from "playwright";
export async function playwright_test_blank(lambda) {
  "a browser that has just been built, handed over on a blank page with nowhere visited yet, and closed again afterwards whatever happens.";
  "the twin that takes an address opens it before handing the page over, which is what most callers want. this one exists for the callers that must be present BEFORE the first address is opened - anything listening for what a page throws on its way in has to be listening already, because an error thrown during the opening is gone by the time the opening has finished. it also lets a caller choose how long to wait and how much of a page to wait for, which is fixed once the harness has navigated for you.";
  let browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage"],
  });
  try {
    let page = await browser.newPage();
    await lambda(page);
  } finally {
    await browser.close();
  }
}
