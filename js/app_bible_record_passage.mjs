import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_folder_first } from "./app_shared_bible_folder_first.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
export async function app_bible_record_passage(chapter_code, verse_numbers) {
  "$plain chapter_code";
  "One passage as the words a reader will read aloud on camera, and the reference said above them. The words are the first chosen language's bible (human 2026-11-24), and so is the book's name in the reference.";
  arguments_assert(arguments, 2);
  let bible_folder = app_shared_bible_folder_first();
  let verses = await ebible_verses_browser(bible_folder, chapter_code);
  let books = await ebible_version_books_browser(bible_folder);
  function inside(verse) {
    let verse_kept = property_in_list(verse, "verse_number", verse_numbers);
    return verse_kept;
  }
  let texts = list_filter_map_property(verses, inside, "text");
  let text = list_join_space(texts);
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  let r = {
    reference,
    text,
  };
  return r;
}
