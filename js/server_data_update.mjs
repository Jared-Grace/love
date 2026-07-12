import { http_post_options } from "./http_post_options.mjs";
import { http_option_sleep_none } from "./http_option_sleep_none.mjs";
import { server_url_data_full } from "./server_url_data_full.mjs";
export async function server_data_update(data) {
  let url = server_url_data_full();
  let options_extra = http_option_sleep_none();
  await http_post_options(url, data, options_extra);
}
