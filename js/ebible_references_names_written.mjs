import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export function ebible_references_names_written(lines, line_named_or_null) {
  arguments_assert(arguments, 2);
  ("Hand-written passage lines put one at a time to whatever knows how to read one, answered as two lists standing side by side: the book each line named and the chapter and verse it asked for.");
  ("THE LINES THAT COULD NOT BE READ ARE DROPPED RATHER THAN RAISED ON. A hand-written list naming one book this bible does not carry should still answer for the other thirty, and a bible published a book at a time is missing books as an ordinary fact about it rather than as a failure.");
  ("IT KNOWS NOTHING ABOUT BOOK NAMES, WHICH IS THE POINT OF IT BEING ITS OWN NAME. Reading one line is where every spelling difference between translations has to be dealt with, and it is long; walking a list and keeping the answers in step is short and has nothing to do with any of that.");
  ("The two lists are answered separately rather than as one list of pairs because the caller reads them by position, and a line that could not be read leaves neither list, so they stay the same length as each other.");
  let book_names = [];
  let chapter_verses_list = [];
  for (let written of lines) {
    let named = line_named_or_null(written);
    let missing = null_is(named);
    if (missing) {
      continue;
    }
    let book_name = property_get(named, "book_name");
    let chapter_verses = property_get(named, "chapter_verses");
    list_add(book_names, book_name);
    list_add(chapter_verses_list, chapter_verses);
  }
  let r = {
    book_names,
    chapter_verses_list,
  };
  return r;
}
