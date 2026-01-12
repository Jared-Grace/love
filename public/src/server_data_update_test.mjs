import { server_data_update } from "../../../love/public/src/server_data_update.mjs";
import { server_data_get } from "../../../love/public/src/server_data_get.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
import { performance_end } from "../../../love/public/src/performance_end.mjs";
import { performance_start } from "../../../love/public/src/performance_start.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { data_generate } from "./data_generate.mjs";
export async function server_data_update_test() {
  marker("1");
  let p = performance_start("http_json");
  let data = await server_data_get();
  performance_next(p, "http_post_json");
  await server_data_update(data);
  performance_next(p, "data_generate");
  await data_generate({});
  let r = performance_end(p);
  return r;
}
