import { divide_round } from "./divide_round.mjs";
import { equal } from "./equal.mjs";
import { text_starts_with_https_prefix } from "./text_starts_with_https_prefix.mjs";
import { ternary } from "./ternary.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { retry } from "./retry.mjs";
import { object_assign } from "./object_assign.mjs";
import { property_exists } from "./property_exists.mjs";
import { assert_json } from "./assert_json.mjs";
import { catch_call_later } from "./catch_call_later.mjs";
import { promise_wrap } from "./promise_wrap.mjs";
import { http_sleep } from "./http_sleep.mjs";
import { html_loading } from "./html_loading.mjs";
import { error } from "./error.mjs";
import { not } from "./not.mjs";
import { browser_is } from "./browser_is.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine } from "./text_combine.mjs";
export async function http_generic(url, options) {
  "Fetches an address and answers the raw bytes that came back, from a browser or from node alike.";
  "Bytes are the answer rather than text or a parsed reading of them, because the callers want different things - a picture, a font, a page of JSON - and every one of those can be had from the bytes while none of them can be had from another's reading.";
  "Which half runs is decided by where this is running, not by what the caller asked for. A browser has fetch and no way to open a socket; node has sockets and, for a long time, no fetch worth relying on. So the two halves do the same job by different means and the caller is spared knowing which.";
  "The browser half runs inside the shared loading mark, gives up after eight seconds, and tries three times. A stalled connection is the reason for the ceiling: a fetch with no ceiling never settles at all, so the loading mark never comes down and the page looks broken for good, where a fresh attempt on a new connection nearly always succeeds.";
  "The node half waits its turn before asking unless the caller says not to, so that a sweep over hundreds of addresses does not arrive as a flood, and it refuses anything the far end did not answer with a success.";
  let method = options.method || "GET";
  let body = options.body || null;
  let b = browser_is();
  if (b) {
    async function lambda3() {
      let r = {
        method,
      };
      let exists = property_exists(options, "body");
      if (exists) {
        object_assign(r, {
          headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
          },
          body: json_to(body),
        });
      }
      async function attempt() {
        ("a stalled dev HTTP/1.1 connection must not hang forever: a fetch with no ceiling never settles, so ",
          html_loading.name,
          "'s finally never runs and the shared loading overlay stays up permanently. abort after a ceiling (covering both the fetch and the body read) so the socket frees and rejects; retry lets a fresh connection succeed — which is exactly why a manual reload 'fixes' it today");
        let controller = new AbortController();
        property_set(r, "signal", controller.signal);
        function abort() {
          controller.abort();
        }
        let timer = setTimeout(abort, 8000);
        try {
          let response = await fetch(url, r);
          if (not(response.ok)) {
            error("Failed to fetch file");
          }
          let buf = await response.arrayBuffer();
          return buf;
        } finally {
          clearTimeout(timer);
        }
      }
      let attempted = await retry(3, attempt);
      return attempted;
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
    let urlObj = new URL(url);
    function lambda5(res) {
      let chunks = [];
      function lambda2(chunk) {
        chunks.push(chunk);
      }
      let i = catch_call_later(reject, lambda2);
      res.on("data", i);
      function on_end() {
        let statusCode = property_get(res, "statusCode");
        let rounded = divide_round(statusCode, 100);
        let b2 = equal(rounded, 2);
        assert_json(b2, {
          url,
          statusCode,
        });
        let v2 = Buffer.concat(chunks);
        resolve(v2);
      }
      let i2 = catch_call_later(reject, on_end);
      res.on("end", i2);
    }
    let a = {
      hostname: urlObj.hostname,
      port: urlObj.port || (swHttps ? 443 : 80),
      path: text_combine(urlObj.pathname, urlObj.search),
      method,
      family: 4,
      headers: {
        ...(options.headers || {}),
        ...(body
          ? {
              "Content-Type": "application/json",
            }
          : {}),
      },
    };
    let req = h.request(a, lambda5);
    req.on("error", reject);
    if (body) {
      let json = json_to(body);
      req.write(json);
    }
    req.end();
  }
  return buffer;
}
