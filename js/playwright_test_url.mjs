import { fn_name } from "./fn_name.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_test_url(url, lambda) {
  ("a fresh browser with one address already open, handed over ready to be looked at. the same thing it has always done - the launching and the closing now live in ",
    fn_name("playwright_test_blank"),
    ", so the caller that has to be listening before the first address is opened can borrow them without borrowing the navigation too");
  async function on_page(page) {
    await page.goto(url);
    await lambda(page);
  }
  await playwright_test_blank(on_page);
}
