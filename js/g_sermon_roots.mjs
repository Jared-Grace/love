import { fn_name } from "./fn_name.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_word_roots } from "./text_word_roots.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function g_sermon_roots() {
  "Every root the written sermons carry, passages and lines together, in the order they were met.";
  "Both stores are read, the written one and the edited one, because a word only ever seen in an approved line is exactly as much a word of this corpus as one in a draft.";
  "Passages and lines are not kept apart, because what this feeds asks after the vocabulary rather than after who said it. A reading that does need the two apart should gather them itself rather than take them joined and try to split them again.";
  let dir1 = storage_function_path(fn_name("g_sermon_write"), "");
  let dir2 = storage_function_path(g_sermon_edited_store_name(), "");
  let dirs = [dir1, dir2];
  let roots = [];
  for (let dir of dirs) {
    let files = await folder_read_files(dir);
    for (let file of files) {
      let file_path = path_join([dir, file]);
      let chapter = await file_read_json(file_path);
      let passages = property_get_or(chapter, "passages", []);
      for (let passage of passages) {
        let scripture = property_get_or(passage, "scripture", "");
        list_add_multiple(roots, text_word_roots(scripture));
        let lines = property_get_or(passage, "lines", []);
        for (let line of lines) {
          let said = property_get_or(line, "text", "");
          list_add_multiple(roots, text_word_roots(said));
        }
      }
    }
  }
  return roots;
}
