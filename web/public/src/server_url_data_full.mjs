import { server_url_data_ending } from "../../../love/public/src/server_url_data_ending.mjs";
import { server_url_get } from "../../../love/public/src/server_url_get.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function server_url_data_full() {
  let v = text_combine_multiple([server_url_get(), server_url_data_ending()]);
  return v;
}
