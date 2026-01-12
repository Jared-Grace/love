import { server_url_data_ending } from "../../../love/public/src/server_url_data_ending.mjs";
import { server_url_get } from "../../../love/public/src/server_url_get.mjs";
export function server_url_data_full() {
  let v = server_url_get() + server_url_data_ending() + "";
  return v;
}
