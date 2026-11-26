import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_folder_first } from "./app_shared_bible_folder_first.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { app_bible_record_passages_download } from "./app_bible_record_passages_download.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
export async function app_bible_record_home_entry_for(chapter_code) {
  arguments_assert(arguments, 1);
  let bible_folder = app_shared_bible_folder_first();
  let books = await ebible_version_books_browser(bible_folder);
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    [],
  );
  ("EVERY PASSAGE OF THE CHAPTER, NOT ONLY THE ONE ON SCREEN (human 2026-11-24: Psalm 2 said 1 of 1 though other passages had been recorded): the page draws only the passage picked, so the list is built from the chapter's whole split, and the takes of passages not drawn are looked up quietly here, while the drawn one's recorder looks up its own.");
  let downloaded = await app_bible_record_passages_download(chapter_code);
  let all_passages = property_get(downloaded, "passages");
  function lambda(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let e = {
      verse_numbers,
      blob: null,
    };
    return e;
  }
  let entries = list_map(all_passages, lambda);
  function entry_for(verse_numbers) {
    let wanted = list_join_comma(verse_numbers);
    function same(e) {
      let joined = property_list_join_comma(e, "verse_numbers");
      let eq = equal(joined, wanted);
      return eq;
    }
    let found = list_filter(entries, same);
    if (list_empty_is(found)) {
      let e = {
        verse_numbers,
        blob: null,
      };
      list_add(entries, e);
      return e;
    }
    let first = list_first(found);
    return first;
  }
  let r = {
    reference,
    entries,
    entry_for,
  };
  return r;
}
