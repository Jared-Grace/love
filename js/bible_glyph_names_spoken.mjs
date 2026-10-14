import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
export function bible_glyph_names_spoken(names) {
  arguments_assert(arguments, 1);
  ("$plain names");
  ("the names are the pictures of one group, in order. They are text to show and nothing that runs.");
  ("The pictures of one group said in words, each name with its underscores read as spaces and the names joined by a plus, the same mark that joins them in the shorthand.");
  let spoken = [];
  for (let name of names) {
    let item = name.split("_").join(" ");
    list_add(spoken, item);
  }
  let r = list_join(spoken, " + ");
  return r;
}
