import { buffer_to_json } from "../../../love/public/src/buffer_to_json.mjs";
import { http_generic } from "../../../love/public/src/http_generic.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_main() {
  marker("1");
  let body = {
    test: 123,
  };
  const url = "/api";
  let buffer = await http_generic(url, {
    method: "POST",
    body: body,
  });
  let parsed = buffer_to_json(buffer);
  log(parsed);
}
