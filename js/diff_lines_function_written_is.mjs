import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_trim } from "./text_trim.mjs";
import { js_keyword_export } from "./js_keyword_export.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
export function diff_lines_function_written_is(changed) {
  "Whether a difference's changed lines are nothing but lines put in, one of which opens a function the file gives out - which is what a whole new function written from nothing looks like.";
  "IT IS A NON-GAP WEARING THE LARGEST BUCKET'S CLOTHES. A reading that sizes what a named command would have made outright counted every one of these as several lines of program, and a whole new function is the one change this repo has had a command for the longest - a body is authored, and no transform was ever going to compose one. Left in, the bucket the whole argument rests on is inflated by exactly the work that is already covered.";
  "NOTHING TAKEN OUT IS HALF OF IT AND THE OTHER HALF IS THE OPENING LINE. A file that only gains lines is either a new file or an addition to one; requiring the line that opens a function the file gives out separates the first from the second, because that line is written once per file and cannot be added to a file that already has it.";
  arguments_assert(arguments, 1);
  let empty_is = list_empty_is(changed);
  if (empty_is) {
    return false;
  }
  let opened = false;
  for (let line of changed) {
    let put_in = text_starts_with(line, "+");
    if (not(put_in)) {
      return false;
    }
    let without_sign = text_slice_from(line, 1);
    let bare = text_trim(without_sign);
    let keyword = js_keyword_export();
    let gives_out = text_starts_with(bare, keyword);
    if (gives_out) {
      let named = text_includes(bare, "function ");
      if (named) {
        opened = true;
      }
    }
  }
  return opened;
}
