import { arguments_assert } from "./arguments_assert.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_url_decode } from "./text_url_decode.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
export function file_url_path(url) {
  "$plain url";
  "The place on disk an address beginning file:// is naming.";
  "It does the work in text rather than borrowing Node's, because Node's is brought in from a module a page cannot have, and the two functions that wanted this both sit in chains a page ends up carrying. Turning an address into a path is spelling, not machinery - there is nothing here for a browser to fail at, and being able to run anywhere is what keeps the whole chain behind it out of the question.";
  "The escapes are undone, which is the whole of what Node's does beyond taking the front off. A folder with a space in its name arrives spelled with a percent and would otherwise be looked for under that spelling.";
  "This is the spelling used where files have one root and are separated by slashes. An address naming a drive letter would need more, and none has ever been asked for here.";
  arguments_assert(arguments, 1);
  let prefix = "file://";
  let file_is = text_starts_with(url, prefix);
  true_is_assert_json(file_is, {
    hint: "this turns a file:// address into a path and was handed something else - a page's own address is not one of these, so a caller that may be running in a browser wants a different question",
    url,
  });
  let rest = text_prefix_without(url, prefix);
  let f_path = text_url_decode(rest);
  return f_path;
}
