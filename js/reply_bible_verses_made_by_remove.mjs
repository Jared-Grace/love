import { property_get } from "./property_get.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { file_read } from "./file_read.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function reply_bible_verses_made_by_remove() {
  "Takes the words saying the verse generator made it off every verse rule, because a verse rule is edited by hand once its draft exists. Finds its own set and answers the names it changed.";
  let said =
    /\. Made by ",\s*fn_name\("reply_bible_verse_function_new"\),\s*"\."\s*\);/;
  let names = await functions_names();
  let changed = [];
  for (let name of names) {
    if (/^reply_bible_[0-9a-z]{3}_\d+_\d+$/.test(name)) {
      let r = await function_name_to_path_unalias(name);
      let f_path = property_get(r, "f_path");
      let contents = await file_read(f_path);
      if (said.test(contents)) {
        let contents2 = contents.replace(said, '.");');
        await file_overwrite(f_path, contents2);
        changed.push(name);
      }
    }
  }
  return changed;
}
