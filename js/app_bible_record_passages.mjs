import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { app_bible_sermons_download } from "./app_bible_sermons_download.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { list_map } from "./list_map.mjs";
export async function app_bible_record_passages(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("One chapter cut into the passages the gospel game preaches from, each as the words a reader will read aloud on camera and the reference said above them.");
  ("The cut is the game's own, so a passage is whole sentences and never stops halfway through one; the words are the English bible's.");
  let bible_folder = ebible_folder_english();
  let verses = await ebible_verses_browser(bible_folder, chapter_code);
  let books = await ebible_version_books_browser(bible_folder);
  let downloaded = await app_bible_sermons_download(chapter_code);
  let passages = property_get(downloaded, "passages");
  function passage_to_shown(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    function inside(verse) {
      let verse_number = property_get(verse, "verse_number");
      let r = list_includes(verse_numbers, verse_number);
      return r;
    }
    let chosen = list_filter(verses, inside);
    let texts = list_map_property(chosen, "text");
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
  let shown = list_map(passages, passage_to_shown);
  return shown;
}
