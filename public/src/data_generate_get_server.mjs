import { log } from "../../../love/public/src/log.mjs";
import { http_json } from "../../../love/public/src/http_json.mjs";
import { server_url_data_ending } from "../../../love/public/src/server_url_data_ending.mjs";
import { server_url_get } from "../../../love/public/src/server_url_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function data_generate_get_server() {
  marker("1");
  let url = server_url_get() + server_url_data_ending() + "";
  url = server_url_get();
  log({
    url,
  });
  let parsed = await http_json(url);
  return parsed;
}
