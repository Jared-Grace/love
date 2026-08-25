import { text_prefix_without_inner } from "./text_prefix_without_inner.mjs";
import { ebible_references_names_book_names } from "./ebible_references_names_book_names.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_size } from "./text_size.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { ternary } from "./ternary.mjs";
import { greater_than } from "./greater_than.mjs";
import { each } from "./each.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { text_combine } from "./text_combine.mjs";
export function ebible_references_names(books, lines) {
  "Hand-written passage lines split into the book each one names, spelled the way this particular bible spells that book, and the chapter-and-verse left over.";
  "A BOOK NAME IS ONLY MATCHED WHERE THE NEXT CHARACTER IS A SPACE. Matched on the bare name, a bible whose list calls the book Psalm swallows the line Psalms 89:1 as well, and what is left after the name is stripped is the letter s - which is carried downstream as if it were a chapter and verse, and raises there rather than here. One passage raising empties the whole reading of that bible, so the bible reads as carrying nothing at all, which is indistinguishable from one nobody uploaded. Four translations looked exactly like that.";
  "THE COMMON SPELLING IS TRIED FIRST AND THE WRITTEN ONE IS THE FALLBACK. Most bibles here call it Psalms, so the line is rewritten to that and matched; a bible that calls it Psalm matches nothing, and the line as it was written is tried instead. Trying the written line first would break the other direction, because Song is a prefix of Song of Solomon and would match before the rewrite could turn one into the other.";
  "Where two book names both fit, the longer wins, so a list holding both Song and Song of Solomon cannot take the shorter and leave of Solomon behind as a chapter.";
  "A LINE NAMING A BOOK IN WORDS THIS BIBLE DOES NOT USE IS STILL READ, BY WAY OF THE CODE UNDERNEATH THE NAME. Every one of these bibles lists the same sixty-six books under the same three-letter codes and then spells them however it likes: one shouts PSALMS, one calls it Tehillim, and neither is reachable by a line that says Psalms. So the ordinary English list is tried as well, and the name it matches is turned into a code and the code back into whatever this bible calls that book. Two translations were unreachable at every passage for exactly this reason and looked like translations nobody had uploaded.";
  "MATCHING IGNORES UPPER AND LOWER CASE, which is the whole of what stood between the all-capitals bible and being readable, and costs nothing anywhere else because two books of one bible never differ by case alone.";
  "A line naming no book this bible carries is dropped rather than raised on, and the two lists it answers with stay side by side - the caller reads them as pairs.";
  let books_names = list_map_property(books, "text");
  let canon = ebible_books_engbsb();
  let canon_names = list_map_property(canon, "text");
  function bible_name_of_canon_or_null(canon_name) {
    let book_code = list_find_property_get(
      canon,
      "text",
      canon_name,
      "book_code",
    );
    let entry = list_find_property_or_null(books, "book_code", book_code);
    let uncarried = null_is(entry);
    if (uncarried) {
      return null;
    }
    let bible_name = property_get(entry, "text");
    return bible_name;
  }
  let r = ebible_references_names_book_names(
    books_names,
    canon_names,
    bible_name_of_canon_or_null,
    lines,
  );
  let book_names = property_get(r, "book_names");
  let chapter_verses_list = property_get(r, "chapter_verses_list");
  let v = {
    chapter_verses_list,
    book_names,
  };
  return v;
}
