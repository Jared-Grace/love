import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_find_indices } from "../../../love/public/src/list_find_indices.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function sandbox() {
  let p = folder_user_docs_path("monothesism_wiki.txt");
  let contents = await file_read(p);
  let split = text_split_space(contents);
  let list = list_find_indices(split, predicate);
  function lambda(right) {
    let left = right - 2;
    let sliced = list_slice(split, left, right);
    let joined = list_join_space(sliced);
    return joined;
  }
  let mapped = list_map(list, lambda);
  return mapped;
  function predicate(item) {
    let sw2 = text_starts_with(item, "BCE");
    return sw2;
  }
}
