import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_main() {
  marker("1");
  let body = {
    function_name: "sandbox",
  };
  const url = "/api";
  let parsed = await http_post_json(url, body);
  log(parsed);
}
