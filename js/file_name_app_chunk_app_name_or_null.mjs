import { arguments_assert } from "./arguments_assert.mjs";
import { file_extension_js } from "./file_extension_js.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { text_dot } from "./text_dot.mjs";
import { text_ends_with_not } from "./text_ends_with_not.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
export function file_name_app_chunk_app_name_or_null(file_name) {
  "$plain file_name";
  "Which app one of these extra script files was cut out of, or nothing at all when the name is not one of those.";
  "Its two neighbours already say this same shape from the other two sides - one recognises a name as having it, one builds a name that has it - and this is the third side, taking a name apart again. It is here because the folder is the only place some of these files are still named: an app whose own script has gone leaves its extra ones behind, and nothing but the leftover names says which app they belonged to.";
  "The number in front is checked rather than skipped over, for the same reason the recogniser checks it: a page belonging to another app, one whose name happens to end in this app's name, would otherwise be read as a piece of this one.";
  arguments_assert(arguments, 1);
  let extension = file_extension_js();
  let other = text_ends_with_not(file_name, extension);
  if (other) {
    return null;
  }
  let dot = text_dot();
  let front = text_split_first(file_name, dot);
  let numbered = text_digits_is(front);
  if (not(numbered)) {
    return null;
  }
  let prefix = text_combine(front, dot);
  let rest = text_prefix_without(file_name, prefix);
  let app_name = text_suffix_without(rest, extension);
  return app_name;
}
