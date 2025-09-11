import { catch_call } from "./catch_call.mjs";
import { promise_wrap } from "./promise_wrap.mjs";
import { integer_random } from "./integer_random.mjs";
import { sleep } from "./sleep.mjs";
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
    return buf;
  }
  await sleep(integer_random(5, 8) * 1000);
  let h = null;
  let sw = string_starts_with(url, "https://");
  if (sw) {
    h = await import("https");
  }
  let buffer = await promise_wrap(lambda);
  function lambda(resolve, reject) {
    function lambda2(res) {
      const chunks = [];
      function lambda(chunk) {
        let v2 = chunks.push(chunk);
        return v2;
      }
      let result = catch_call(reject, lambda);
      res.on("data", result);
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
      let result2 = catch_call(reject, lambda3);
      res.on("end", result2);
    }
    h.get(url, lambda2).on("error", reject);
  }
  return buffer;
}
