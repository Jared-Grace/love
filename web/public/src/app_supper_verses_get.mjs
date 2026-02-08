import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_supper_verses_get_upload_destination } from "../../../love/public/src/app_supper_verses_get_upload_destination.mjs";
import { firebase_storage_download_json_decompress } from "../../../love/public/src/firebase_storage_download_json_decompress.mjs";
import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { ebible_chapter_codes } from "../../../love/public/src/ebible_chapter_codes.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
export async function app_supper_verses_get() {
  let e = ebible_folder_english();
  let b = browser_is();
  if (b) {
    async function get() {
      let destination = app_supper_verses_get_upload_destination();
      let v = await firebase_storage_download_json_decompress(destination);
      return v;
    }
    let value = await global_function_property_initialize_async(
      ebible_chapter_codes,
      e,
      get,
    );
    let verses = object_property_get(value, "verses");
    return verses;
  }
  let references = `Matthew 26:26-30
Mark 14:22-26
Luke 22:14-20
John 6:27-35
John 6:48-58
Acts 2:42
Acts 20:7
1 Corinthians 10:16-22
1 Corinthians 11:17-34`;
  let split = text_split_newline(references);
  let list = await ebible_references_parse_lines([e], split);
  return list;
}
