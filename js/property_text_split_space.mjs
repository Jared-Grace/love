import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function property_text_split_space(object, property_name) {
  arguments_assert(arguments, 2);
  ("The separate words of a sentence a record keeps under a name.");
  ("The words of a verse, the words of a line a gate printed, the words naming");
  ("where a replacement starts and ends. Each is stored as one run of text because");
  ("that is how it was written down, and each is worked on a word at a time, so");
  ("the whole sentence is only ever passed through.");
  let text = property_get(object, property_name);
  let words = text_split_space(text);
  return words;
}
