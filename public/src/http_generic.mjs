import { http_generic_options_default } from "../../../love/public/src/http_generic_options_default.mjs";
import { http_generic_browser } from "../../../love/public/src/http_generic_browser.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { round } from "../../../love/public/src/round.mjs";
import { catch_call } from "../../../love/public/src/catch_call.mjs";
import { promise_wrap } from "../../../love/public/src/promise_wrap.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { http_sleep } from "../../../love/public/src/http_sleep.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export async function http_generic(url, options) {
  const r = http_generic_options_default(options);
  let body = property_get(r, "body");
  let method = property_get(r, "method");
  const b = browser_is();
  if (b) {
    let v = await http_generic_browser(method, options, body, url);
    return v;
  }
  let sleep = true;
  let e = property_exists(options, "sleep");
  if (e) {
    sleep = property_get(options, "sleep");
  }
  if (sleep) {
    await http_sleep();
  }
  let swHttps = text_starts_with(url, "https://");
  let h_name = ternary(swHttps, "s", "");
  let h = await import("http" + h_name);
  let buffer = await promise_wrap(lambda);
  function lambda(resolve, reject) {
    const urlObj = new URL(url);
    function lambda5(res) {
      const chunks = [];
      function lambda2(chunk) {
        chunks.push(chunk);
      }
      let i = catch_call(reject, lambda2);
      res.on("data", i);
      function on_end() {
        let statusCode = property_get(res, "statusCode");
        const d = statusCode / 100;
        const rounded = round(d);
        assert_json(rounded === 2, {
          url,
          statusCode,
        });
        let v2 = Buffer.concat(chunks);
        resolve(v2);
      }
      let i2 = catch_call(reject, on_end);
      res.on("end", i2);
    }
    const a = {
      hostname: urlObj.hostname,
      port: urlObj.port || (swHttps ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method,
      headers: {
        ...(options.headers || {}),
        ...(body
          ? {
              "Content-Type": "application/json",
            }
          : {}),
      },
    };
    const req = h.request(a, lambda5);
    req.on("error", reject);
    if (body) {
      let json = json_to(body);
      req.write(json);
    }
    req.end();
  }
  return buffer;
}
