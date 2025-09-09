import { round } from "./round.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { browser_is } from "./browser_is.mjs";
import { error } from "./error.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
export async function http(url) {
  let b = browser_is();
  if (b) {
    const response = await fetch(url);
    if (not(response.ok)) {
      error("Failed to fetch file");
    }
    const text = await response.text();
    return text;
  }
  let h = null;
  let sw = string_starts_with(url, "https://");
  if (sw) {
    h = await import("https");
  }
  let text = await new Promise(function lambda5(resolve, reject) {
    function lambda2(res) {
      let data = "";
      function lambda(chunk) {
        data += chunk;
      }
      res.on("data", lambda);
      function lambda4() {
        let { statusCode } = res;
        let d = statusCode / 100;
        let rounded = round(d);
        assert_json(rounded === 2, {
          data,
        });
        resolve(data);
      }
      res.on("end", lambda4);
    }
    h.get(url, lambda2).on("error", reject);
  });
  return text;
}
