import { arguments_assert } from "./arguments_assert.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_last } from "./list_last.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export function bible_usfm_lines_laid_out_blank_line_add(out) {
  arguments_assert(arguments, 1);
  let opening = list_size_equal(out, 0);
  if (opening) {
    return;
  }
  let last = list_last(out);
  let already = text_empty_is(last);
  if (already) {
    return;
  }
  list_add(out, "");
}
