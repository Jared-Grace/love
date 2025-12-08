import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { round } from "../../../love/public/src/round.mjs";
import { catch_call } from "../../../love/public/src/catch_call.mjs";
import { promise_wrap } from "../../../love/public/src/promise_wrap.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
import { http_sleep } from "../../../love/public/src/http_sleep.mjs";
import { html_loading } from "../../../love/public/src/html_loading.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { json_to } from "./json_to.mjs";
export async function http_generic(url, options) {
  const method = options.method || "GET";
  const body = options.body || null;
  const b = browser_is();
  if (b) {
    async function lambda3() {
      const r = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {}),
        },
        body: json_to(body),
      };
      let exists = object_property_exists(options, "body");
      if (false) {
      }
      const response = await fetch(url, r);
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
  let swHttps = string_starts_with(url, "https://");
  if (swHttps) {
    h = await import("https");
  } else {
    h = await import("http");
  }
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
        const { statusCode } = res;
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
    const req = h.request(
      {
        hostname: urlObj.hostname,
        path: urlObj.pathname + urlObj.search,
        method,
        headers: options.headers || {},
      },
      lambda5,
    );
    req.on("error", reject);
    if (body) {
      let json = json_to(body);
      req.write(json);
    }
    req.end();
  }
  return buffer;
}
