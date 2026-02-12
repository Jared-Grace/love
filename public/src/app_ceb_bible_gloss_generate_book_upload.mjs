import { ebible_chapters_each } from "../../../love/public/src/ebible_chapters_each.mjs";
import { app_ceb_bible_gloss_generate_chapter_upload } from "../../../love/public/src/app_ceb_bible_gloss_generate_chapter_upload.mjs";
export async function app_ceb_bible_gloss_generate_book_upload(book_code) {
  const bible_folder = "engbsb";
  await ebible_chapters_each(
    bible_folder,
    book_code,
    app_ceb_bible_gloss_generate_chapter_upload,
  );
}
