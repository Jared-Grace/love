import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_references_names } from "./ebible_references_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { ebible_reference_parts } from "./ebible_reference_parts.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { and } from "./and.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property_join_space } from "./list_map_property_join_space.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export async function ebible_reference_books_text(books, reference) {
  "$plain reference";
  "The words a bible holds at one reference, for a caller that has already fetched that bible's list of books.";
  "THE BOOKS ARE HANDED IN RATHER THAN FETCHED HERE because fetching them is the slow half. Measured, one reference took twenty-two seconds and the words themselves were a fraction of it; the rest was asking which books this bible has, an answer that is the same for every reference in a list of a hundred. A caller answering one reference pays it once and a caller answering a hundred also pays it once.";
  "That is the whole reason this is a name of its own rather than the inside of the singular reader. Both readers are that reader now, and neither can drift from the other.";
  arguments_assert(arguments, 2);
  let named = ebible_references_names(books, [reference]);
  let book_names = property_get(named, "book_names");
  let unnamed = list_empty_is(book_names);
  if (unnamed) {
    return null;
  }
  let chapter_verses_list = property_get(named, "chapter_verses_list");
  let book_name = list_first(book_names);
  let chapter_verses = list_first(chapter_verses_list);
  let parts = ebible_reference_parts(books, book_name, chapter_verses);
  let chapter_code = property_get(parts, "chapter_code");
  let value = property_get(parts, "verse_start");
  let verse_first = Number(value);
  let value2 = property_get(parts, "verse_end");
  let verse_last = Number(value2);
  let folder = ebible_folder_english();
  let verses = await ebible_verses_storage_browser(folder, chapter_code);
  function lambda$asked(verse) {
    let property_name = verse_number_key();
    let value3 = property_get(verse, property_name);
    let number = Number(value3);
    let started = greater_than_equal(number, verse_first);
    let ended = less_than_equal(number, verse_last);
    let inside = and(started, ended);
    return inside;
  }
  let asked = list_filter(verses, lambda$asked);
  let none = list_empty_is(asked);
  if (none) {
    return null;
  }
  let text = list_map_property_join_space(asked, "text");
  return text;
}
