import { arguments_assert } from "./arguments_assert.mjs";
import { html_error_records_storage_key } from "./html_error_records_storage_key.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function playwright_error_records(page) {
  "what the page in front of the browser has written down about the errors it hit, oldest first, and an empty list when it hit none";
  "Every page in this repo files its faults in the browser's own store before anything else has run, so this is the one place a test can ask what went wrong without the app having to survive long enough to be asked. It is the same word the app itself reads them back by.";
  "The reading is handed over as WRITING rather than as a function, the same way the recorder beside it is. What runs in the browser can call nothing this repo has, and a function handed over gets its body sent as it stands - so the pass that rewrites bodies into calls on this repo's own names would quietly send over a body naming things that are not there.";
  arguments_assert(arguments, 1);
  let key = html_error_records_storage_key();
  let expression = text_combine_multiple([
    '(function () { try { var held = window.localStorage.getItem("',
    key,
    '"); if (!held) { return []; } var parsed = JSON.parse(held); return parsed.value || []; } catch (ignored) { return []; } })()',
  ]);
  let records = await page.evaluate(expression);
  return records;
}
