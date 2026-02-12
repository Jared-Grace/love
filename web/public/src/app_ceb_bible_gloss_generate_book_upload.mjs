import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_chapters } from "../../../love/public/src/ebible_chapters.mjs";
import { app_ceb_bible_gloss_generate_chapter_upload } from "../../../love/public/src/app_ceb_bible_gloss_generate_chapter_upload.mjs";
export async function app_ceb_bible_gloss_generate_book_upload(book_code) {
  const bible_folder = "engbsb";
  let mapped = await ebible_chapters(bible_folder, book_code);
  await each_async(mapped, app_ceb_bible_gloss_generate_chapter_upload);
}
