import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function sandbox() {
  let p = folder_user_docs_path("monothesism_wiki.txt");
  let contents = await file_read(p);
  let split = text_split_space(contents);
  function lambda(la) {
    function lambda2(item, index) {
      let sw = text_starts_with(item, "BCE");
      if (sw) {
        la(index);
      }
    }
    each_index(split, lambda2);
  }
  let list = list_adder(lambda);
  return list;
}
