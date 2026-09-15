import { arguments_assert } from "./arguments_assert.mjs";
import { catch_call_later } from "./catch_call_later.mjs";
import { property_get } from "./property_get.mjs";
import { divide_round } from "./divide_round.mjs";
import { equal } from "./equal.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine } from "./text_combine.mjs";
import { http_node_idle_ms } from "./http_node_idle_ms.mjs";
import { json_to } from "./json_to.mjs";
export function http_node_request({
  resolve,
  reject,
  url,
  swHttps,
  method,
  options,
  body,
  h,
}) {
  "WHAT THE FAR END SAID IS PART OF THE REFUSAL, not something to be thrown away with it. The bytes are already gathered by the time the status is looked at, and a refusal answered with only an address and a number is a refusal nobody can act on: fal turning a picture down and fal being sent a body it cannot read are both four hundred and twenty two, and telling those two apart decides whether the next move is rewording the picture or fixing the code. Both were guessed at, and the reason was sitting in the bytes being dropped one line further down.";
  "A SILENT SOCKET IS A FAILURE, NOT A WAIT. Without a limit an answer that stops arriving halfway leaves the ask pending forever: no error, no end, and whatever awaited it never moves again. So a socket quiet for longer than the idle limit is torn down, and the tearing is the refusal. The response carries its own error listener for the same reason - once the answer has begun, a torn socket reports on the response and not on the request, and a refusal nobody listens for is the same hang wearing a different name.";
  arguments_assert(arguments, 1);
  let urlObj = new URL(url);
  function lambda5(res) {
    let chunks = [];
    function lambda2(chunk) {
      chunks.push(chunk);
    }
    let i = catch_call_later(reject, lambda2);
    res.on("data", i);
    res.on("error", reject);
    function on_end() {
      let statusCode = property_get(res, "statusCode");
      let rounded = divide_round(statusCode, 100);
      let b = equal(rounded, 2);
      let v = Buffer.concat(chunks);
      let said = buffer_text_to(v);
      assert_json(b, {
        url,
        statusCode,
        said,
      });
      resolve(v);
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
  let idle_ms = http_node_idle_ms();
  function on_idle() {
    let json2 = json_to({
      url,
      idle_ms,
      hint: "the socket sent and received nothing for this long, so the ask was given up rather than waited on forever",
    });
    let quiet = new Error(json2);
    req.destroy(quiet);
  }
  req.setTimeout(idle_ms, on_idle);
  if (body) {
    let json = json_to(body);
    req.write(json);
  }
  req.end();
}
