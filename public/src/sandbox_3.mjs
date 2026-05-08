import { log_json } from "../../../love/public/src/log_json.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_to_indices_items } from "../../../love/public/src/list_to_indices_items.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { folder_user_downloads_path } from "../../../love/public/src/folder_user_downloads_path.mjs";
export async function sandbox_3() {
  let r = folder_user_downloads_path("contacts.csv");
  let contents = await file_read(r);
  let lines = text_split_newline(contents);
  function lambda(line) {
    let columns = text_split_comma(line);
    let indicized = list_to_indices_items(columns);
    let names = ["first", "middle", "last"];
    let size = list_size(names);
    let taken = list_take(columns, size);
    log_json(right);
    let item = list_get(list, index);
    return indicized;
  }
  let mapped = list_map(lines, lambda);
  return mapped;
}
