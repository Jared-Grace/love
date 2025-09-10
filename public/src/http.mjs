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
    const buf = await response.arrayBuffer();
    let v = Buffer.from(buf);
    return v;
  }
  let h = null;
  let sw = string_starts_with(url, "https://");
  if (sw) {
    h = await import("https");
  }
  let buffer = await new Promise(function lambda4(resolve, reject) {
    function lambda2(res) {
      const chunks = [];
      function lambda(chunk) {
        let v2 = chunks.push(chunk);
        return v2;
      }
      res.on("data", lambda);
      function lambda3() {
        const { statusCode } = res;
        const d = statusCode / 100;
        const rounded = round(d);
        assert_json(rounded === 2, {
          url,
        });
        let v3 = Buffer.concat(chunks);
        resolve(v3);
      }
      res.on("end", lambda3);
    }
    h.get(url, lambda2).on("error", reject);
  });
  return buffer;
}
