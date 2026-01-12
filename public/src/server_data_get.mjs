import { http_json } from "../../../love/public/src/http_json.mjs";
import { http_option_sleep_none } from "../../../love/public/src/http_option_sleep_none.mjs";
import { server_url_data_full } from "../../../love/public/src/server_url_data_full.mjs";
export async function server_data_get() {
  let url = server_url_data_full();
  let options = http_option_sleep_none();
  let data = await http_json(url, options);
  return data;
}
