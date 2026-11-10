import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_error_records_storage_key } from "./html_error_records_storage_key.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function playwright_error_records_clear(page) {
  arguments_assert(arguments, 1);
  ("empties what the page in front of the browser wrote down as caught failures, the list ",
    fn_name("playwright_error_records"),
    " reads. that list lives in the page's own storage and outlives a fresh open, so a check that opens one page many times empties it between opens or blames one open's failure on every open after it.");
  let key = html_error_records_storage_key();
  let expression = text_combine_multiple([
    '(function () { try { window.localStorage.removeItem("',
    key,
    '"); } catch (ignored) {} return true; })()',
  ]);
  await page.evaluate(expression);
}
