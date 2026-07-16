import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { g_verify_status_path } from "./g_verify_status_path.mjs";
import { html_loading_suppressed } from "./html_loading_suppressed.mjs";
export async function g_verify_status_download_fresh(chapter_code) {
  let project_url = firebase_storage_url_project_jg();
  let destination = g_verify_status_path(chapter_code);
  try {
    let value = await html_loading_suppressed(function download() {
      return firebase_storage_download_json_decompress(project_url, destination);
    });
    return value;
  } catch (missing) {
    return { busy: false, verse: "", note: "" };
  }
}
