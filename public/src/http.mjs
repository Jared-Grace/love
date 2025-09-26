import { http_sleep } from "./http_sleep.mjs";
import { html_loading } from "./html_loading.mjs";
import { catch_call } from "./catch_call.mjs";
import { promise_wrap } from "./promise_wrap.mjs";
import { round } from "./round.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { browser_is } from "./browser_is.mjs";
import { error } from "./error.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
export async function http(url) {
  let b = browser_is();
  if (b) {
    async function lambda3() {
      const response = await fetch(url);
      if (not(response.ok)) {
        error("Failed to fetch file");
      }
      const buf = await response.arrayBuffer();
      return buf;
    }
    let v = await html_loading(lambda3);
    return v;
  }
  await http_sleep();
  let h = null;
  let sw = string_starts_with(url, "https://");
  if (sw) {
    h = await import("https");
  }
  let buffer = await promise_wrap(lambda);
  function lambda(resolve, reject) {
    function lambda2(res) {
      const chunks = [];
      function on_data(chunk) {
        let v2 = chunks.push(chunk);
        return v2;
      }
      let result = catch_call(reject, on_data);
      res.on("data", result);
      function on_end() {
        const { statusCode } = res;
        const d = statusCode / 100;
        const rounded = round(d);
        assert_json(rounded === 2, {
          url,
        });
        let v3 = Buffer.concat(chunks);
        resolve(v3);
      }
      let result2 = catch_call(reject, on_end);
      res.on("end", result2);
    }
    h.get(url, lambda2).on("error", reject);
  }
  return buffer;
}
