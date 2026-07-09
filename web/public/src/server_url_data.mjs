import { server_url_data_ending } from "../../../love/public/src/server_url_data_ending.mjs";
import { server_url_api } from "../../../love/public/src/server_url_api.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function server_url_data() {
  let u = server_url_api();
  let v3 = text_combine(u, server_url_data_ending());
  return v3;
}
