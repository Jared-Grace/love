import { bible_audio_folder } from "../../../love/public/src/bible_audio_folder.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { text_to_speech } from "../../../love/public/src/text_to_speech.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_chapters_each_verses_list } from "../../../love/public/src/ebible_chapters_each_verses_list.mjs";
import { ebible_books_to_chapter_codes } from "../../../love/public/src/ebible_books_to_chapter_codes.mjs";
import { ebible_version_books_testament_apocrypha } from "../../../love/public/src/ebible_version_books_testament_apocrypha.mjs";
import { ebible_chapters_each_verses_check } from "../../../love/public/src/ebible_chapters_each_verses_check.mjs";
export async function ebible_apocrypha_text_to_speech() {
  const newLocal = "D:\\programs\\WPy64-312100\\python\\";
  const bible_folder = "engwebu";
  await ebible_chapters_each_verses_check(bible_folder);
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  let list = await ebible_books_to_chapter_codes(books, bible_folder);
  await ebible_chapters_each_verses_list(list, bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    let mapped = list_map_property(verses, "text");
    let text = list_join_space(mapped);
    let f = bible_audio_folder(bible_folder, chapter_code);
    await text_to_speech({
      text: text,
      path_output: f,
    });
  }
  return;
  const chapter_code = "SIR01";
  let verses = await ebible_verses(bible_folder, chapter_code);
  let mapped = list_map_property(verses, "text");
  let text = list_join_space(mapped);
}
