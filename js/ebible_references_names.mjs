import { ebible_references_names_book_names } from "./ebible_references_names_book_names.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function ebible_references_names(books, lines) {
  "Hand-written passage lines split into the book each one names, spelled the way this particular bible spells that book, and the chapter-and-verse left over.";
  "HOW A NAME IS MATCHED AGAINST A LINE, AND IN WHICH ORDER THE SPELLINGS ARE TRIED, ARE BOTH ASKED FOR RATHER THAN SETTLED HERE. What is left is the three things only this bible can answer: the names it uses itself, the ordinary English names to fall back on, and how to get from one of those back to its own.";
  "A LINE NAMING A BOOK IN WORDS THIS BIBLE DOES NOT USE IS STILL READ, BY WAY OF THE CODE UNDERNEATH THE NAME. Every one of these bibles lists the same sixty-six books under the same three-letter codes and then spells them however it likes: one shouts PSALMS, one calls it Tehillim, and neither is reachable by a line that says Psalms. So the ordinary English list is tried as well, and the name it matches is turned into a code and the code back into whatever this bible calls that book. Two translations were unreachable at every passage for exactly this reason and looked like translations nobody had uploaded.";
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
