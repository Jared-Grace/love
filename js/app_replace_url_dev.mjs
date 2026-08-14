import { text_combine } from "./text_combine.mjs";
import { app_replace_url_suffix_dev_hash } from "./app_replace_url_suffix_dev_hash.mjs";
import { server_url } from "./server_url.mjs";
export async function app_replace_url_dev() {
  "The address the replace app is served at while it is being worked on, with the part after the hash already on the end of it.";
  let url_prefix = server_url();
  let url_suffix = await app_replace_url_suffix_dev_hash();
  let combined = text_combine(url_prefix, url_suffix);
  return combined;
}
