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
      document.addEventListener(
        "copy",
        function () {
          let active = document.activeElement;
          let text =
            active && "value" in active
              ? active.value
              : String(document.getSelection());
          window.__copied.push(text);
        },
        true,
      );
      let c = navigator.clipboard;
      if (c && c.writeText) {
        let write = c.writeText.bind(c);
        c.writeText = function (text) {
          window.__copied.push(text);
          return write(text).catch(function () {});
        };
      }
      navigator.share = function (data) {
        window.__copied.push(data.url || data.text || "");
        return Promise.resolve();
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
    result.hash = await page.evaluate(function () {
      return window.location.hash;
    });
    for (let name of list) {
      let before = await page.evaluate(function () {
        return window.__copied.length;
      });
      await page
        .getByRole("button", {
          name,
          exact: true,
        })
        .first()
        .click();
      await page.waitForFunction(
        function (n) {
          return window.__copied.length > n;
        },
        before,
        {
          timeout: wait_ms,
        },
      );
      let text = await page.evaluate(function (n) {
        return window.__copied[n];
      }, before);
      result.copied.push(text);
    }
  }
  await playwright_test_blank(on_page);
  return result;
}
