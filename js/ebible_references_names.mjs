import { property_get } from "./property_get.mjs";
import { ebible_references_names_written } from "./ebible_references_names_written.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_size } from "./text_size.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { ternary } from "./ternary.mjs";
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
  let r = ebible_references_names_written(lines, aliased, book_name_or_null);
  let chapter_verses_list = property_get(r, "chapter_verses_list");
  let book_names = property_get(r, "book_names");
  let v = {
    chapter_verses_list,
    book_names,
  };
  return v;
}
