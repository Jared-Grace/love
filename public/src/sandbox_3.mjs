import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { folder_user_downloads_path } from "../../../love/public/src/folder_user_downloads_path.mjs";
export async function sandbox_3() {
  let r = folder_user_downloads_path("contacts.csv");
  let contents = await file_read(r);
  let lines = text_split_newline(contents);
  function lambda(item) {
    let split = text_split_comma(item);
    function lambda2(item2) {}
    let mapped2 = list_map(list, lambda2);
    return split;
  }
  let mapped = list_map(lines, lambda);
  return mapped;
}
