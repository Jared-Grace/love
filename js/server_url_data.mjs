import { server_url_data_ending } from "./server_url_data_ending.mjs";
import { server_url_api } from "./server_url_api.mjs";
import { text_combine } from "./text_combine.mjs";
export function server_url_data() {
  let u = server_url_api();
  let v = text_combine(u, server_url_data_ending());
  return v;
}
