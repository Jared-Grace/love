import { ebible_references_parse_lines_browser } from "./ebible_references_parse_lines_browser.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { ebible_chapter_codes_browser } from "./ebible_chapter_codes_browser.mjs";
import { property_get } from "./property_get.mjs";
import { app_supper_verses_get_upload_destination } from "./app_supper_verses_get_upload_destination.mjs";
import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { global_function_property_initialize_async } from "./global_function_property_initialize_async.mjs";
import { browser_is } from "./browser_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export async function app_supper_verses_get(ebible_folder) {
  let b = browser_is();
  if (b) {
    async function get() {
      let destination = app_supper_verses_get_upload_destination(ebible_folder);
      let project_url = firebase_storage_url_project_jg();
      let v = await firebase_storage_download_json_decompress(
        project_url,
        destination,
      );
      return v;
    }
    let value = await global_function_property_initialize_async(
      ebible_chapter_codes_browser,
      ebible_folder,
      get,
    );
    let verses = property_get(value, "verses");
    return verses;
  }
  let references =
    "Matthew 26:26-30\nMark 14:22-26\nLuke 22:14-20\nJohn 6:27-35\nJohn 6:48-58\nActs 2:42\nActs 20:7\n1 Corinthians 10:16-22\n1 Corinthians 11:17-34";
  let split = text_split_newline(references);
  let list = await ebible_references_parse_lines_browser(
    [ebible_folder],
    split,
  );
  return list;
}
