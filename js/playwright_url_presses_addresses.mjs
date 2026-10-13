import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_presses_addresses(url, texts_comma) {
  "$plain url";
  "$plain texts_comma";
  "Opens a page, then presses the first thing showing each of these texts in turn - and hands back the address the page stood at once it had loaded and again after each press, so what a page writes into its own link is read off rather than guessed at.";
  "Only a thing that shows, and whose whole text is the one asked for, is pressed. The first run of this pressed a button the page was keeping out of sight, and reported what no reader could have done.";
  "The texts arrive as one word with commas between them, the way a command line hands a list over.";
  let addresses = [];
  let texts = texts_comma.split(",");
  function press(element) {
    element.click();
  }
  async function on_page(page) {
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    let v = page.url();
    addresses.push(v);
    for (let text of texts) {
      let showing = page
        .getByText(text, {
          exact: true,
        })
        .locator("visible=true");
      await showing.first().evaluate(press);
      await page.waitForTimeout(3000);
      let v2 = page.url();
      addresses.push(v2);
    }
  }
  await playwright_test_blank(on_page);
  return addresses;
}
