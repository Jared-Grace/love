import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_inline_path_entries_taken } from "./app_bible_record_inline_path_entries_taken.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { app_bible_record_download_name } from "./app_bible_record_download_name.mjs";
import { app_bible_record_native_download_multiple } from "./app_bible_record_native_download_multiple.mjs";
export async function app_bible_record_inline_path_chapter_download(
  entries,
  chapter_code,
  busy,
  chapter_button,
  ready_words,
) {
  arguments_assert(arguments, 5);
  async function work() {
    let taken = app_bible_record_inline_path_entries_taken(entries);
    let blobs = list_map_property(taken, "blob");
    let lists = list_map_property(taken, "verse_numbers");
    let verses_taken = list_concat_multiple(lists);
    let name = app_bible_record_download_name(chapter_code, verses_taken);
    await app_bible_record_native_download_multiple(blobs, name);
  }
  await busy(chapter_button, ready_words, work);
}
