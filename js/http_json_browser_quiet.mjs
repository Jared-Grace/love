import { arguments_assert } from "./arguments_assert.mjs";
import { http_browser_bytes } from "./http_browser_bytes.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function http_json_browser_quiet(url) {
  "$plain url";
  "Ask an address for JSON from a browser with nothing drawn over the page - for a question asked behind a person's back, where covering the screen would stop them doing the next thing.";
  arguments_assert(arguments, 1);
  let options = {};
  let bytes = await http_browser_bytes("GET", options, null, url);
  let parsed = buffer_to_json(bytes);
  return parsed;
}
