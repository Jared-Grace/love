import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_replace_url_suffix_dev_hash } from "../../../love/public/src/app_replace_url_suffix_dev_hash.mjs";
import { server_url } from "../../../love/public/src/server_url.mjs";
export async function app_replace_url_dev() {
  let url_prefix = server_url();
  let url_suffix = await app_replace_url_suffix_dev_hash();
  let combined = text_combine(url_prefix, url_suffix);
  return combined;
}
