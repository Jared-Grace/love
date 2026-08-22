import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null } from "./catch_null.mjs";
import { git_file_read_at_or_null } from "./git_file_read_at_or_null.mjs";
import { js_parse } from "./js_parse.mjs";
import { null_is } from "./null_is.mjs";
export async function git_file_js_parse_at_or_null(folder, commit, path) {
  "$plain folder";
  "$plain commit";
  "$plain path";
  "One file as it stood at one commit, read out of the history and parsed - or nothing at all, where the history has no such file to give.";
  "Nothing is the answer for every way of failing here, and that is deliberate rather than careless. A path that did not exist yet, a path a later rename carried somewhere else, a file that will not parse - a caller sweeping the whole history meets all three, cannot tell them apart from the outside, and wants the same thing from each: leave this one out and go on. Refusing instead would end a sweep of hundreds on the first commit that predates something.";
  "A CALLER THAT DOES NEED THEM TOLD APART ASKS THE READING HALF ON ITS OWN. The read is its own name now, so nothing here has to grow a second answer for the sake of the one caller that cares whether the file was there at all.";
  "It is its own name because asking the history for a file and asking it for the same file at a different moment are the same work twice, and a reading that compares two moments needs both.";
  arguments_assert(arguments, 3);
  let file_text = await git_file_read_at_or_null(folder, commit, path);
  let absent = null_is(file_text);
  if (absent) {
    return null;
  }
  function parse_lambda() {
    let ast = js_parse(file_text);
    return ast;
  }
  let parsed = catch_null(parse_lambda);
  return parsed;
}
