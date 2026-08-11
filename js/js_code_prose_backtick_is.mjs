import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_any } from "./list_any.mjs";
export function js_code_prose_backtick_is(code) {
  arguments_assert(arguments, 1);
  ("Whether this source holds a statement that opens with a backtick, which is how a paragraph with a name standing in a gap in it is written.");
  ("Asked for the same reason its sibling is asked: so that a reading which would otherwise parse every file in the repo parses only the files that could be hiding a paragraph. Nine files answer yes out of nearly eight thousand.");
  ("Answering yes does not promise a paragraph is there. A backtick starting a line could be the opening of a piece of text being built across several lines, and the caller parses and finds out - a template only counts as a paragraph when the whole statement is the template and nothing receives it.");
  let lines = text_split_newline(code);
  function opening_is(line) {
    let trimmed = text_trim(line);
    let held = text_starts_with(trimmed, "`");
    return held;
  }
  let found = list_any(lines, opening_is);
  return found;
}
