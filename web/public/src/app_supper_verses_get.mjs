import { ebible_chapter_codes } from "../../../love/public/src/ebible_chapter_codes.mjs";
import { firebase_storage_download_ebible_cache } from "../../../love/public/src/firebase_storage_download_ebible_cache.mjs";
import { ebible_chapter_codes_upload_name } from "../../../love/public/src/ebible_chapter_codes_upload_name.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { string_split_newline } from "../../../love/public/src/string_split_newline.mjs";
export async function app_supper_verses_get() {
  let b = browser_is();
  if (b) {
    let file_name = ebible_chapter_codes_upload_name();
    let value = await firebase_storage_download_ebible_cache(
      ebible_chapter_codes,
      bible_folder,
      file_name,
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
