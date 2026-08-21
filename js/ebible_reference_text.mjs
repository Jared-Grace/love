import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_references_names } from "./ebible_references_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { ebible_reference_parts } from "./ebible_reference_parts.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { and } from "./and.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property_join_space } from "./list_map_property_join_space.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export async function ebible_reference_text(reference) {
  "$plain reference";
  "The words the English bible holds at one reference written the way a person writes one - 'John 3:16' or 'Matthew 26:59-60' - as a single line, or null when the reference names nothing this bible carries.";
  "A REFERENCE COVERING SEVERAL VERSES COMES BACK AS ONE FLOWING LINE, without the verse numbers in it. The reason for wanting the words at all is usually to put them in front of somebody who has just been given the reference, and a reader in that position is reading a sentence, not consulting a table.";
  "It is the plain-words twin of the reader the apps use, which goes through the browser's own fetching. This one goes through the same store the songs' verses come from, so anything running outside a page - a description being written, a prompt being built - can ask the same question without a page around it.";
  "NULL RATHER THAN A THROW for a reference this bible does not carry, because a list of references is a thing a person wrote by hand and one of them being wrong must not stop the other thirty being answered.";
  arguments_assert(arguments, 1);
  let folder = ebible_folder_english();
  let books = await ebible_version_books(folder);
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
