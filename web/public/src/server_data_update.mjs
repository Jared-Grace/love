import { http_post_options } from "../../../love/public/src/http_post_options.mjs";
import { http_option_sleep_none } from "../../../love/public/src/http_option_sleep_none.mjs";
import { server_url_data_full } from "../../../love/public/src/server_url_data_full.mjs";
export async function server_data_update(data) {
  let url = server_url_data_full();
  let options_extra = http_option_sleep_none();
  await http_post_options(url, data, options_extra);
}
