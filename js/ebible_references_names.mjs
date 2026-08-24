import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
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
  "A LINE NAMING A BOOK IN WORDS THIS BIBLE DOES NOT USE IS STILL READ, BY WAY OF THE CODE UNDERNEATH THE NAME. Every one of these bibles lists the same sixty-six books under the same three-letter codes and then spells them however it likes: one shouts PSALMS, one calls it Tehillim, and neither is reachable by a line that says Psalms. So the ordinary English list is tried as well, and the name it matches is turned into a code and the code back into whatever this bible calls that book. Two translations were unreachable at every passage for exactly this reason and looked like translations nobody had uploaded.";
  "MATCHING IGNORES UPPER AND LOWER CASE, which is the whole of what stood between the all-capitals bible and being readable, and costs nothing anywhere else because two books of one bible never differ by case alone.";
  "A line naming no book this bible carries is dropped rather than raised on, and the two lists it answers with stay side by side - the caller reads them as pairs.";
  let books_names = list_map_property(books, "text");
  let canon = ebible_books_engbsb();
  let canon_names = list_map_property(canon, "text");
  function longest_named_or_null(line, names) {
    let lowered = text_lower_to(line);
    let longest = "";
    function lambda(book_text) {
      let book_prefix = text_combine(book_text, " ");
      let prefix_lowered = text_lower_to(book_prefix);
      let starts = text_starts_with(lowered, prefix_lowered);
      if (starts) {
        let book_size = text_size(book_text);
        let longest_size = text_size(longest);
        let longer = greater_than(book_size, longest_size);
        if (longer) {
          longest = book_text;
        }
      }
    }
    each(names, lambda);
    let none = text_empty_is(longest);
    let found = ternary(none, null, longest);
    return found;
  }
  function chapter_verses_or_null(line, matched) {
    let skipped = text_size(matched);
    let after = text_skip(line, skipped);
    let parts = text_split_space(after);
    let filtered = list_filter_text_empty_not_is(parts);
    let empty = list_empty_is(filtered);
    if (empty) {
      return null;
    }
    let chapter_verses = list_first(filtered);
    return chapter_verses;
  }
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
  function line_named_or_null(written) {
    let renamed = aliased(written);
    let attempts = [
      {
        line: renamed,
        names: books_names,
        own: true,
      },
      {
        line: written,
        names: books_names,
        own: true,
      },
      {
        line: renamed,
        names: canon_names,
        own: false,
      },
      {
        line: written,
        names: canon_names,
        own: false,
      },
    ];
    for (let attempt of attempts) {
      let line = property_get(attempt, "line");
      let names = property_get(attempt, "names");
      let matched = longest_named_or_null(line, names);
      let unmatched = null_is(matched);
      if (unmatched) {
        continue;
      }
      let own = property_get(attempt, "own");
      let borrowed = not(own);
      let book_name = matched;
      if (borrowed) {
        book_name = bible_name_of_canon_or_null(matched);
      }
      let unknown = null_is(book_name);
      if (unknown) {
        continue;
      }
      let chapter_verses = chapter_verses_or_null(line, matched);
      let blank = null_is(chapter_verses);
      if (blank) {
        continue;
      }
      let found = {
        book_name,
        chapter_verses,
      };
      return found;
    }
    return null;
  }
  let r = ebible_references_names_written(lines, line_named_or_null);
  let chapter_verses_list = property_get(r, "chapter_verses_list");
  let book_names = property_get(r, "book_names");
  let v = {
    chapter_verses_list,
    book_names,
  };
  return v;
}
