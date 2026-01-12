import { sleep } from "../../../love/public/src/sleep.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
import { performance_end } from "../../../love/public/src/performance_end.mjs";
import { performance_start } from "../../../love/public/src/performance_start.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { http_json } from "../../../love/public/src/http_json.mjs";
import { server_url_data_ending } from "../../../love/public/src/server_url_data_ending.mjs";
import { server_url_get } from "../../../love/public/src/server_url_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { data_generate } from "./data_generate.mjs";
export async function data_generate_get_server() {
  marker("1");
  let url = server_url_get() + server_url_data_ending() + "";
  log({
    url,
  });
  let p = performance_start("http_json");
  let parsed = await http_json(url, {
    sleep: false,
  });
  let result = performance_next(p, "data_generate");
  await data_generate({});
  let r = performance_end(p);
  return r;
}
