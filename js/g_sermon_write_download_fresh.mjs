import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { json_from } from "./json_from.mjs";
import { json_decompress_object } from "./json_decompress_object.mjs";
import { g_sermon_write_upload_path } from "./g_sermon_write_upload_path.mjs";
export async function g_sermon_write_download_fresh(chapter_code) {
  "raw fetch (no http_generic) so the poll does not flash the html_loading overlay";
  let project_url = firebase_storage_url_project_jg();
  let destination = firebase_path_fix(g_sermon_write_upload_path(chapter_code));
  let url = firebase_storage_url(destination, project_url);
  let response = await fetch(url);
  let text = await response.text();
  let compressed = json_from(text);
  let value = await json_decompress_object(compressed);
  return value;
}
