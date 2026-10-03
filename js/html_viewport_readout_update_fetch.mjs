import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { fn_name } from "./fn_name.mjs";
import { server_url_api } from "./server_url_api.mjs";
export function html_viewport_readout_update_fetch(lines, round_to, n) {
  arguments_assert(arguments, 3);
  let v = lines.concat([
    "page time " + round_to(n),
    "agent " + navigator.userAgent,
  ]);
  let body = json_to({
    f_name: fn_name("viewport_readout_record"),
    args: [v],
  });
  function lambda() {
    return null;
  }
  let a = server_url_api();
  fetch(a, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  }).catch(lambda);
}
