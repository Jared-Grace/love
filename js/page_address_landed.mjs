import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function page_address_landed(url) {
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  arguments_assert(arguments, 1);
  ("Opens an address in a real browser and says where the browser ended up, including the words after the hash mark.");
  ("Only a browser can answer this. The server never sees the part after the hash mark, so a read of the forward from the server's side says nothing about whether a chapter link still opens its chapter once it has been sent on.");
  let landed = "";
  let status = 0;
  async function on_page(page) {
    let response = await page.goto(url, {
      waitUntil: "domcontentloaded",
    });
    status = response.status();
    landed = page.url();
  }
  await playwright_test_blank(on_page);
  let r = {
    url,
    status,
    landed,
  };
  return r;
}
