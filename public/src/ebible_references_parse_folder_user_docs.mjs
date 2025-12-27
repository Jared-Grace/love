import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { ebible_references_parse } from "../../../love/public/src/ebible_references_parse.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
export async function ebible_references_parse_folder_user_docs(
  file_name,
  second_language,
) {
  let v = ebible_folder_english();
  let file_path = folder_user_docs_path(file_name);
  let bible_folders = [second_language, v];
  let list = await ebible_references_parse(bible_folders, file_path);
  function lambda(item) {
    let text = object_property_get(item, "text");
    let reference = object_property_get(item, "reference");
    let v2 = reference + " " + text;
    return v2;
  }
  let mapped = list_map(list, lambda);
  let joined = list_join_newline_2(list2);
  await clipboard_copy(list);
  return list;
}
