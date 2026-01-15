import { ebible_apocrypha_text_to_speech_chapter_generic } from "../../../love/public/src/ebible_apocrypha_text_to_speech_chapter_generic.mjs";
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
    await ebible_apocrypha_text_to_speech_chapter_generic(
      verses,
      bible_folder,
      chapter_code,
    );
  }
  return;
}
