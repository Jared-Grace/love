import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_download_name } from "./app_bible_record_download_name.mjs";
import { app_bible_record_native_download } from "./app_bible_record_native_download.mjs";
export async function app_bible_record_inline_path_download(
  chapter_code,
  verse_numbers,
  blob,
  busy,
  download_button,
  ready_words,
) {
  arguments_assert(arguments, 6);
  async function work() {
    let name = app_bible_record_download_name(chapter_code, verse_numbers);
    await app_bible_record_native_download(blob, name);
  }
  await busy(download_button, ready_words, work);
}
