import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_a_main() {
  marker("1");
  const function_name = fn_name("functions_names");
  let body = {
    function_name: function_name,
  };
  const url = "/api";
  let parsed = await http_post_json(url, body);
  log(parsed);
}
