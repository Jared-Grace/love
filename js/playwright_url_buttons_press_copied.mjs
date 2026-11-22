import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_first } from "./list_first.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_buttons_press_copied(url, buttons) {
  "open a page, press each named button in turn, and hand back what each press put on the clipboard, with the address the page settled on once it had loaded";
  "the clipboard itself is never read. a page reached over plain http has no clipboard to ask, and copies by the older command, so the writing is caught on its way out instead: the modern call is wrapped, the copy the older command raises is listened for, and a share is wrapped too, because a share hands its link over the same way a copy does. this catches what the page MEANT to copy on either road, which is the part that can break; whether the phone then keeps it is the phone's business.";
  "each button is matched by its whole label, so a short label like Copy never presses a longer one that merely contains it.";
  url_opened_unasked_assert(url);
  let wait_ms = 10000;
  let result = {
    hash: null,
    copied: [],
  };
  async function on_page(page) {
    function catcher() {
      window.__copied = [];
      function lambda() {
        let active = document.activeElement;
        let v = document.getSelection();
        let text = active && "value" in active ? active.value : String(v);
        window.__copied.push(text);
      }
      document.addEventListener("copy", lambda, true);
      let c = navigator.clipboard;
      if (c && c.writeText) {
        let write = c.writeText.bind(c);
        c.writeText = function lambda3(text) {
          window.__copied.push(text);
          function lambda2() {}
          let r = write(text).catch(lambda2);
          return r;
        };
      }
      navigator.share = function lambda4(data) {
        window.__copied.push(data.url || data.text || "");
        let r2 = Promise.resolve();
        return r2;
      };
    }
    await page.addInitScript(catcher);
    await page.goto(url);
    await page.waitForLoadState("load");
    let list = text_split_comma(buttons);
    let first = list_first(list);
    let first_button = page
      .getByRole("button", {
        name: first,
        exact: true,
      })
      .first();
    await first_button.waitFor({
      timeout: wait_ms,
    });
    function lambda5() {
      let r3 = window.location.hash;
      return r3;
    }
    result.hash = await page.evaluate(lambda5);
    for (let name of list) {
      function lambda6() {
        let r4 = window.__copied.length;
        return r4;
      }
      let before = await page.evaluate(lambda6);
      await page
        .getByRole("button", {
          name,
          exact: true,
        })
        .first()
        .click();
      function lambda7(n) {
        let r5 = window.__copied.length > n;
        return r5;
      }
      await page.waitForFunction(lambda7, before, {
        timeout: wait_ms,
      });
      function lambda8(n) {
        let r6 = window.__copied[n];
        return r6;
      }
      let text = await page.evaluate(lambda8, before);
      result.copied.push(text);
    }
  }
  await playwright_test_blank(on_page);
  return result;
}
