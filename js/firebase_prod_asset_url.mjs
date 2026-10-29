import { firebase_project_url_jg } from "./firebase_project_url_jg.mjs";
import { text_suffix_without_try } from "./text_suffix_without_try.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function firebase_prod_asset_url(file_name) {
  "$plain file_name";
  let base = firebase_project_url_jg();
  ("2026-10-29: a page is asked for without its .html, since firebase.json's cleanUrls (2026-10-28) answers a .html address with a 301 to the same address without it, and the download does not follow redirects - every deploy's frozen-app check then failed on replace_2026_05_03.html. The bytes served there are the same file's.");
  let served = text_suffix_without_try(file_name, ".html");
  let combined = list_join_slash_forward([base, served]);
  return combined;
}
