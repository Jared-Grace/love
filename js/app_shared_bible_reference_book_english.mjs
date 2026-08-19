import { text_upper_to } from "./text_upper_to.mjs";
import { list_map } from "./list_map.mjs";
import { app_shared_bible_folder_reading } from "./app_shared_bible_folder_reading.mjs";
import { app_shared_bible_read_books_en } from "./app_shared_bible_read_books_en.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_references_names } from "./ebible_references_names.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { equal } from "./equal.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { list_find_property_get_or } from "./list_find_property_get_or.mjs";
import { list_first } from "./list_first.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_shared_bible_reference_book_english(ref_line) {
  "A reference with its book named in English, whatever language the book was written in - Juan 3:16 comes back John 3:16.";
  "Everything that reads a reference reads it against the English books, all the way down: the parser fetches the English book list and looks the line up in that, whichever bibles it then goes and fetches the verses out of. So a reader who typed the book the way the screen in front of them spells it got nothing, and the page opened at the front of the bible instead.";
  "It is a translation at the door rather than a second language taught to the reader underneath. One place understands the other spelling; everywhere after it, a reference is English and there is nothing new to know.";
  "Anything it cannot place comes back exactly as it arrived - a line already in English, a book this translation has not got, a line that is not a reference at all. Being unable to help is not the same as having something to say, and a guess here would send the reader to a passage nobody asked for.";
  arguments_assert(arguments, 1);
  let folder = app_shared_bible_folder_reading();
  let english = ebible_folder_english();
  let reading_english_is = equal(folder, english);
  if (reading_english_is) {
    return ref_line;
  }
  let books = await ebible_version_books_browser(folder);
  ("The books are matched in capitals on both sides, because the bibles do not agree about how a book name is written down - the Tagalog one spells John JUAN, the English one John. A reader typing what the screen in front of them says would otherwise be told there is no such book by the very translation that just printed it.");
  function upper_of(book) {
    let s = property_get(book, "text");
    let text = text_upper_to(s);
    let book_code = property_get(book, "book_code");
    let uppered = {
      text,
      book_code,
    };
    return uppered;
  }
  let books_upper = list_map(books, upper_of);
  let line_upper = text_upper_to(ref_line);
  let v = ebible_references_names(books_upper, [line_upper]);
  let book_names = property_get(v, "book_names");
  let placed_not = list_empty_is(book_names);
  if (placed_not) {
    return ref_line;
  }
  let book_name = list_first(book_names);
  let chapter_verses_list = property_get(v, "chapter_verses_list");
  let chapter_verses = list_first(chapter_verses_list);
  let book_code = list_find_property_get(
    books_upper,
    "text",
    book_name,
    "book_code",
  );
  let books_en = await app_shared_bible_read_books_en();
  let book_name_english = list_find_property_get_or(
    books_en,
    "book_code",
    book_code,
    "text",
    null,
  );
  let unknown = null_is(book_name_english);
  if (unknown) {
    return ref_line;
  }
  let space = " ";
  let line = text_combine_multiple([book_name_english, space, chapter_verses]);
  return line;
}
