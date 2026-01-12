import { server_url_data_full } from "../../../love/public/src/server_url_data_full.mjs";
import { http_post_options } from "../../../love/public/src/http_post_options.mjs";
import { http_option_sleep_none } from "../../../love/public/src/http_option_sleep_none.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
import { performance_end } from "../../../love/public/src/performance_end.mjs";
import { performance_start } from "../../../love/public/src/performance_start.mjs";
import { http_json } from "../../../love/public/src/http_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { data_generate } from "./data_generate.mjs";
export async function data_generate_get_server() {
  marker("1");
  let url = server_url_data_full();
  let p = performance_start("http_json");
  let options = http_option_sleep_none();
  let parsed = await http_json(url, options);
  performance_next(p, "http_post_json");
  let options_extra = http_option_sleep_none();
  await http_post_options(url, parsed, options_extra);
  performance_next(p, "data_generate");
  await data_generate({});
  let r = performance_end(p);
  return r;
}
