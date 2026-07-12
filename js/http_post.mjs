import { http_post_options } from "./http_post_options.mjs";
export async function http_post(url, body) {
  let options_extra = {};
  let v = await http_post_options(url, body, options_extra);
  return v;
}
