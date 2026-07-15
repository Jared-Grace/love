import { text_combine } from "./text_combine.mjs";
import { app_replace } from "./app_replace.mjs";
import { app_shared_url_suffix_dev_hash } from "./app_shared_url_suffix_dev_hash.mjs";
import { app_replace_animation_duration_max } from "./app_replace_animation_duration_max.mjs";
import { server_url } from "./server_url.mjs";
export async function app_replace_url_dev_watch() {
  "the dev url a human watches: full animation duration (what a real player sees), unlike app_replace_url_dev which runs d=0 for fast headless tests";
  let d = app_replace_animation_duration_max();
  let hash = {
    d,
  };
  let url_suffix = await app_shared_url_suffix_dev_hash(app_replace, hash);
  let url = text_combine(server_url(), url_suffix);
  return url;
}
