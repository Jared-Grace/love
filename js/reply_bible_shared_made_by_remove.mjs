import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { file_read } from "./file_read.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function reply_bible_shared_made_by_remove() {
  "Takes the line saying the verse generator made it off every shared word and phrase, because those are edited by hand now. Finds its own set and answers the names it changed.";
  let line = text_combine_multiple([
    '  ("Made by ", ',
    fn_name("fn_name"),
    '("',
    fn_name("reply_bible_verse_function_new"),
    '"), ".");',
  ]);
  let names = await functions_names();
  let changed = [];
  for (let name of names) {
    if (name.startsWith("reply_word_") || name.startsWith("reply_phrase_")) {
      let r = await function_name_to_path_unalias(name);
      let f_path = property_get(r, "f_path");
      let contents = await file_read(f_path);
      let lines = contents.split("\n");
      if (lines.includes(line)) {
        function other(candidate) {
          let neq = not_equal(candidate, line);
          return neq;
        }
        let contents2 = lines.filter(other).join("\n");
        await file_overwrite(f_path, contents2);
        changed.push(name);
      }
    }
  }
  return changed;
}
