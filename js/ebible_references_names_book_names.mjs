import { property_not } from "./property_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_replace_if_starts_with } from "./text_replace_if_starts_with.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_references_names_written } from "./ebible_references_names_written.mjs";
export function ebible_references_names_book_names(
  books_names,
  canon_names,
  longest_named_or_null,
  bible_name_of_canon_or_null,
  chapter_verses_or_null,
  lines,
) {
  "Every bible reference these lines open with, given back as the book it names and the chapter and verses that follow it.";
  "THIS BIBLE'S OWN BOOK NAMES ARE TRIED BEFORE THE CANON'S, so a translation that names a book its own way is read that way rather than through a name borrowed from somewhere else. Within each of those, the line with Psalm and Song of Solomon put right is tried before the line as a person spelt it.";
  arguments_assert(arguments, 6);
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
      let borrowed = property_not(attempt, "own");
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
  let r2 = {
    chapter_verses_list,
    book_names,
  };
  return r2;
}
