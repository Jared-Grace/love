import { http_post_options } from "../../../love/public/src/http_post_options.mjs";
export async function http_post(url, body) {
  const options_extra = {};
  let v = await http_post_options(body, options_extra, url);
  return v;
}
