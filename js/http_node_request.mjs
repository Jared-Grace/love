import { buffer_text_to } from "./buffer_text_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { catch_call_later } from "./catch_call_later.mjs";
import { property_get } from "./property_get.mjs";
import { divide_round } from "./divide_round.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine } from "./text_combine.mjs";
import { json_to } from "./json_to.mjs";
export function http_node_request(
  resolve,
  reject,
  url,
  swHttps,
  method,
  options,
  body,
  h,
) {
  "WHAT THE FAR END SAID IS PART OF THE REFUSAL, not something to be thrown away with it. The bytes are already gathered by the time the status is looked at, and a refusal answered with only an address and a number is a refusal nobody can act on: fal turning a picture down and fal being sent a body it cannot read are both four hundred and twenty two, and telling those two apart decides whether the next move is rewording the picture or fixing the code. Both were guessed at, and the reason was sitting in the bytes being dropped one line further down.";
  arguments_assert(arguments, 8);
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
  if (body) {
    let json = json_to(body);
    req.write(json);
  }
  req.end();
}
