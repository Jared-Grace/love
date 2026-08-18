import { arguments_assert } from "./arguments_assert.mjs";
import { http_option_sleep_none } from "./http_option_sleep_none.mjs";
import { http_generic } from "./http_generic.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
export async function http_text_or_null(url) {
  "Ask an address for its contents as text, and answer nothing at all when the address does not answer.";
  "NOTHING IS THE ANSWER TO A MISS, rather than a stopped run. A caller asking for many addresses in a row is usually checking a list of names it wrote by hand, and one wrong name out of seventy should leave the other sixty-nine fetched and the one reported. Stopping at the first would mean one whole run per mistake.";
  "It does not wait its turn before asking, because the callers that need this are fetching a handful of small fixed files rather than sweeping a stranger's site, and a wait of several seconds each turns a minute into an hour.";
  arguments_assert(arguments, 1);
  let options = http_option_sleep_none();
  async function lambda() {
    let bytes = await http_generic(url, options);
    return bytes;
  }
  let buffer = await catch_null_async(lambda);
  let absent = null_is(buffer);
  if (absent) {
    let none = null;
    return none;
  }
  let text = buffer_text_to(buffer);
  return text;
}
