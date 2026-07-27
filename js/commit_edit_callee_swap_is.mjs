import { text_starts_with } from "./text_starts_with.mjs";
import { equal } from "./equal.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { text_index_of_from } from "./text_index_of_from.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
export function commit_edit_callee_swap_is(code) {
  "Two lines that read the same from their opening bracket onward, and differently before it, are one call with a different function put in its place - the arguments untouched";
  let taken_out = null;
  let put_in = null;
  for (let line of code) {
    let added = text_starts_with(line, "+");
    if (added) {
      put_in = line;
      continue;
    }
    taken_out = line;
  }
  let missing = equal(put_in, null) || equal(taken_out, null);
  if (missing) {
    return false;
  }
  let bracket = "(";
  let has_out = text_includes(taken_out, bracket);
  let has_in = text_includes(put_in, bracket);
  let callable = has_out && has_in;
  if (not(callable)) {
    return false;
  }
  let at_out = text_index_of_from(taken_out, bracket, 0);
  let at_in = text_index_of_from(put_in, bracket, 0);
  let tail_out = text_slice_from(taken_out, at_out);
  let tail_in = text_slice_from(put_in, at_in);
  let same_arguments = equal(tail_out, tail_in);
  return same_arguments;
}
