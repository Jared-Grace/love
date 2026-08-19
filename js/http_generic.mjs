import { http_node_request } from "./http_node_request.mjs";
import { http_browser_bytes } from "./http_browser_bytes.mjs";
import { text_starts_with_https_prefix } from "./text_starts_with_https_prefix.mjs";
import { ternary } from "./ternary.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { promise_wrap } from "./promise_wrap.mjs";
import { http_sleep } from "./http_sleep.mjs";
import { html_loading } from "./html_loading.mjs";
import { browser_is } from "./browser_is.mjs";
import { text_combine } from "./text_combine.mjs";
export async function http_generic(url, options) {
  "Fetches an address and answers the raw bytes that came back, from a browser or from node alike.";
  "Bytes are the answer rather than text or a parsed reading of them, because the callers want different things - a picture, a font, a page of JSON - and every one of those can be had from the bytes while none of them can be had from another's reading.";
  "Which half runs is decided by where this is running, not by what the caller asked for. A browser has fetch and no way to open a socket; node has sockets and, for a long time, no fetch worth relying on. So the two halves do the same job by different means and the caller is spared knowing which.";
  "The browser half runs inside the shared loading mark, gives up after eight seconds, and tries three times. A stalled connection is the reason for the ceiling: a fetch with no ceiling never settles at all, so the loading mark never comes down and the page looks broken for good, where a fresh attempt on a new connection nearly always succeeds.";
  "The node half sleeps a few seconds before asking unless the caller says not to, and it refuses anything the far end did not answer with a success.";
  "THE SLEEP IS A SPREAD AND NOT A QUEUE, and the difference is the whole of whether a wide sweep survives. Nothing here counts how many asks are already in flight, so every caller sleeps at the same moment as every other one: start six thousand of them together and six thousand sleepers wake inside the same three seconds, which is the same flood arriving three seconds later. Holding a handful of calls apart is all this was ever able to do.";
  "IT WAS MEASURED FAILING, so this is not a worry about what might happen. A run asking every shipped bible for every chapter of one book - two hundred and seventy seven bibles, twenty four chapters each, all started at once - came back saying that bibles were missing chapters they answer for perfectly when asked on their own. The losses were written down as facts about those bibles, because the caller reads a failed ask and an empty answer the same way. Bounding the number in flight is the half of the fix that belongs here; the other half belongs to whatever reads the failure.";
  let method = options.method || "GET";
  let body = options.body || null;
  let b = browser_is();
  if (b) {
    async function lambda3() {
      let r = await http_browser_bytes(method, options, body, url);
      return r;
    }
    let v = await html_loading(lambda3);
    return v;
  }
  let sleep_wanted = true;
  let e = property_exists(options, "sleep");
  if (e) {
    sleep_wanted = property_get(options, "sleep");
  }
  if (sleep_wanted) {
    await http_sleep();
  }
  let swHttps = text_starts_with_https_prefix(url);
  let h_name = ternary(swHttps, "s", "");
  let h = await import(text_combine("http", h_name));
  let buffer = await promise_wrap(lambda);
  function lambda(resolve, reject) {
    let r2 = http_node_request(
      resolve,
      reject,
      url,
      swHttps,
      method,
      options,
      body,
      h,
    );
    return r2;
  }
  return buffer;
}
