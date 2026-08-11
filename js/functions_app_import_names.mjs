import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_last } from "./list_last.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function functions_app_import_names(pairs) {
  arguments_assert(arguments, 1);
  ("The app-owned names being imported in a run of reported lines, each one given back once however many functions reached for it.");
  ("Two functions reaching for the same name are the same question asked twice, and every answer about it is about the name rather than about either reach, so the reading is done per name and the pairs are only where the names came from.");
  ("The imported name is the last word of a reported line, which is safe to read that way because no function name holds a space.");
  let names = [];
  for (let pair of pairs) {
    let words = text_split_space(pair);
    let imported = list_last(words);
    let known = list_includes(names, imported);
    if (known) {
      continue;
    }
    list_add(names, imported);
  }
  names.sort();
  return names;
}
