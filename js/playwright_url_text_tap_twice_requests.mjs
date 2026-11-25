import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_text_tap_twice_requests(url, text) {
  "$plain url";
  "$plain text";
  "Open a page, tap the first span whose text is exactly this text twice, and answer the addresses the page asked for after each tap - so a second tap that downloads again shows itself.";
  "THE TAP IS MADE ON THE SPAN ITSELF, not at a point on the screen: the first tap may open a card that covers the page, and a tap aimed at the screen would then land on the card. Nothing is closed between the two taps, so nothing the page keeps in memory is lost.";
  url_opened_unasked_assert(url);
  let r = null;
  async function on_page(page) {
    let asked = [];
    function on_request(request) {
      let v = request.url();
      asked.push(v);
    }
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    page.on("request", on_request);
    function tap(wanted) {
      let v2 = document.querySelectorAll("span");
      let spans = Array.from(v2);
      function lambda(s) {
        let r2 = s.textContent === wanted;
        return r2;
      }
      let found = spans.find(lambda);
      if (found === undefined) {
        return false;
      }
      found.click();
      return true;
    }
    let first_found = await page.evaluate(tap, text);
    ("A FIXED WAIT, because a page that has once gone quiet counts as quiet for good: asking again whether the network is idle answers at once, while the first tap's downloads are still on their way, and the second tap then races them.");
    await page.waitForTimeout(5000);
    let first = asked.slice();
    asked.length = 0;
    await page.evaluate(tap, text);
    await page.waitForTimeout(5000);
    let second = asked.slice();
    r = {
      found: first_found,
      first,
      second,
    };
  }
  await playwright_test_blank(on_page);
  return r;
}
