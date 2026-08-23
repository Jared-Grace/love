import { text_starts_with } from "./text_starts_with.mjs";
import { text_size } from "./text_size.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { ternary } from "./ternary.mjs";
import { null_is } from "./null_is.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than } from "./greater_than.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { text_replace_if_starts_with } from "./text_replace_if_starts_with.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { text_combine } from "./text_combine.mjs";
export function ebible_references_names(books, lines) {
  "Hand-written passage lines split into the book each one names, spelled the way this particular bible spells that book, and the chapter-and-verse left over.";
  "A BOOK NAME IS ONLY MATCHED WHERE THE NEXT CHARACTER IS A SPACE. Matched on the bare name, a bible whose list calls the book Psalm swallows the line Psalms 89:1 as well, and what is left after the name is stripped is the letter s - which is carried downstream as if it were a chapter and verse, and raises there rather than here. One passage raising empties the whole reading of that bible, so the bible reads as carrying nothing at all, which is indistinguishable from one nobody uploaded. Four translations looked exactly like that.";
  "THE COMMON SPELLING IS TRIED FIRST AND THE WRITTEN ONE IS THE FALLBACK. Most bibles here call it Psalms, so the line is rewritten to that and matched; a bible that calls it Psalm matches nothing, and the line as it was written is tried instead. Trying the written line first would break the other direction, because Song is a prefix of Song of Solomon and would match before the rewrite could turn one into the other.";
  "Where two book names both fit, the longer wins, so a list holding both Song and Song of Solomon cannot take the shorter and leave of Solomon behind as a chapter.";
  "A line naming no book this bible carries is dropped rather than raised on, and the two lists it answers with stay side by side - the caller reads them as pairs.";
  let books_names = list_map_property(books, "text");
  function book_name_or_null(line) {
    let longest = "";
    function lambda(book_text) {
      let book_prefix = text_combine(book_text, " ");
      let starts = text_starts_with(line, book_prefix);
      if (starts) {
        let book_size = text_size(book_text);
        let longest_size = text_size(longest);
        let longer = greater_than(book_size, longest_size);
        if (longer) {
          longest = book_text;
        }
      }
    }
    each(books_names, lambda);
    let none = text_empty_is(longest);
    let found = ternary(none, null, longest);
    return found;
  }
  function aliased(line) {
    let replacements = {
      Psalms: ["Psalm"],
      Song: ["Song of Solomon"],
    };
    let renamed = line;
    function lambda2(froms, to) {
      function lambda3(from) {
        let prefix = text_combine(from, " ");
        let replacement = text_combine(to, " ");
        renamed = text_replace_if_starts_with(renamed, prefix, replacement);
      }
      each(froms, lambda3);
    }
    each_object(replacements, lambda2);
    return renamed;
  }
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
  let v = {
    chapter_verses_list,
    book_names,
  };
  return v;
}
