import { arguments_assert } from "./arguments_assert.mjs";
import { http_node_request } from "./http_node_request.mjs";
import { text_starts_with_https_prefix } from "./text_starts_with_https_prefix.mjs";
import { ternary } from "./ternary.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { promise_wrap } from "./promise_wrap.mjs";
import { http_sleep } from "./http_sleep.mjs";
import { text_combine } from "./text_combine.mjs";
export async function http_generic_node(url, options) {
  "$plain url";
  "$plain options";
  "Fetches an address over a socket and answers the raw bytes that came back. The build machine's half of the shared fetch, kept apart from it so that a page can stop carrying it.";
  "★ IT IS SEPARATE FOR WEIGHT, NOT FOR CLARITY. Asking which environment you are in decides which half RUNS and settles nothing about which half SHIPS - a bundler follows a plain import whether the branch is walked or not, so every page that fetches anything at all was downloading a socket client it has no socket to use. The one thing that keeps it out is being asked for by name at the moment it is wanted, which is what the caller does now.";
  "It sleeps a few seconds before asking unless the caller says not to, and it refuses anything the far end did not answer with a success.";
  "THE SLEEP IS A SPREAD AND NOT A QUEUE, and the difference is the whole of whether a wide sweep survives. Nothing here counts how many asks are already in flight, so every caller sleeps at the same moment as every other one: start six thousand of them together and six thousand sleepers wake inside the same three seconds, which is the same flood arriving three seconds later. Holding a handful of calls apart is all this was ever able to do.";
  "IT WAS MEASURED FAILING, so this is not a worry about what might happen. A run asking every shipped bible for every chapter of one book - two hundred and seventy seven bibles, twenty four chapters each, all started at once - came back saying that bibles were missing chapters they answer for perfectly when asked on their own. The losses were written down as facts about those bibles, because the caller reads a failed ask and an empty answer the same way. Bounding the number in flight is the half of the fix that belongs here; the other half belongs to whatever reads the failure.";
  arguments_assert(arguments, 2);
  let method = options.method || "GET";
  let body = options.body || null;
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
    let r = http_node_request(
      resolve,
      reject,
      url,
      swHttps,
      method,
      options,
      body,
      h,
    );
    return r;
  }
  return buffer;
}
