import { server_data_get } from "../../../love/public/src/server_data_get.mjs";
import { server_url_data_full } from "../../../love/public/src/server_url_data_full.mjs";
import { http_post_options } from "../../../love/public/src/http_post_options.mjs";
import { http_option_sleep_none } from "../../../love/public/src/http_option_sleep_none.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
import { performance_end } from "../../../love/public/src/performance_end.mjs";
import { performance_start } from "../../../love/public/src/performance_start.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { data_generate } from "./data_generate.mjs";
export async function data_generate_get_server() {
  marker("1");
  let p = performance_start("http_json");
  let data = await server_data_get();
  performance_next(p, "http_post_json");
  let options_extra = http_option_sleep_none();
  let url = server_url_data_full();
  await http_post_options(url, data, options_extra);
  performance_next(p, "data_generate");
  await data_generate({});
  let r = performance_end(p);
  return r;
}
