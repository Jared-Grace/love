import { server_url_data_ending } from "./server_url_data_ending.mjs";
import { server_url_get } from "./server_url_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function server_url_data_full() {
  let v = text_combine_multiple([server_url_get(), server_url_data_ending()]);
  return v;
}
