import { firebase_storage_download_json_decompress } from "../../../love/public/src/firebase_storage_download_json_decompress.mjs";
import { ebible_firebase_upload_path } from "../../../love/public/src/ebible_firebase_upload_path.mjs";
import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_chapter_codes } from "../../../love/public/src/ebible_chapter_codes.mjs";
import { ebible_chapter_codes_upload_name } from "../../../love/public/src/ebible_chapter_codes_upload_name.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { string_split_newline } from "../../../love/public/src/string_split_newline.mjs";
export async function app_supper_verses_get() {
  let b = browser_is();
  if (b) {
    let file_name = ebible_chapter_codes_upload_name();
    marker("1");
    async function get() {
      let destination = ebible_firebase_upload_path(bible_folder, file_name);
      let v = await firebase_storage_download_json_decompress(destination);
      return v;
    }
    let value = await global_function_property_initialize_async(
      ebible_chapter_codes,
      bible_folder,
      get,
    );
    return value;
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
  let split = string_split_newline(references);
  let e = ebible_folder_english();
  let list = await ebible_references_parse_lines([e], split);
  return list;
}
