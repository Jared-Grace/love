import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export function ebible_references_names_written(
  lines,
  aliased,
  book_name_or_null,
) {
  arguments_assert(arguments, 3);
  let book_names = [];
  let chapter_verses_list = [];
  for (let written of lines) {
    let renamed = aliased(written);
    let named = book_name_or_null(renamed);
    let unnamed = null_is(named);
    let line_read = ternary(unnamed, written, renamed);
    let written_named = book_name_or_null(written);
    let book_named = ternary(unnamed, written_named, named);
    let missing = null_is(book_named);
    if (missing) {
      continue;
    }
    let book_prefix = text_combine(book_named, " ");
    let after = text_prefix_without(line_read, book_prefix);
    let parts = text_split_space(after);
    let chapter_verses = list_first(parts);
    let blank = text_empty_is(chapter_verses);
    if (blank) {
      continue;
    }
    list_add(book_names, book_named);
    list_add(chapter_verses_list, chapter_verses);
  }
  let r = {
    book_names,
    chapter_verses_list,
  };
  return r;
}
