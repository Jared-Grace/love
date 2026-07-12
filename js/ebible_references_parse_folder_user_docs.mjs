import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { ebible_references_parse } from "./ebible_references_parse.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_references_parse_folder_user_docs(
  file_name,
  second_language,
) {
  let v = ebible_folder_english();
  let file_path = folder_user_docs_path(file_name);
  let bible_folders = [second_language, v];
  let list = await ebible_references_parse(bible_folders, file_path);
  function lambda(item) {
    let text = property_get(item, "text");
    let reference = property_get(item, "reference");
    let v2 = text_combine_multiple([reference, " ", text]);
    return v2;
  }
  let mapped = list_map(list, lambda);
  let joined = list_join_newline_2(mapped);
  await clipboard_copy(joined);
  return joined;
}
