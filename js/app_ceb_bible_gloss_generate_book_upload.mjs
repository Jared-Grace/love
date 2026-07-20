import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_book_chapters_each } from "./ebible_book_chapters_each.mjs";
import { app_ceb_bible_gloss_generate_chapter_upload } from "./app_ceb_bible_gloss_generate_chapter_upload.mjs";
export async function app_ceb_bible_gloss_generate_book_upload(book_code) {
  let bible_folder = ebible_folder_english();
  await ebible_book_chapters_each(
    bible_folder,
    book_code,
    app_ceb_bible_gloss_generate_chapter_upload,
  );
}
