import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_chapters } from "../../../love/public/src/ebible_chapters.mjs";
import { app_ceb_bible_gloss_generate_chapter_upload } from "../../../love/public/src/app_ceb_bible_gloss_generate_chapter_upload.mjs";
export async function app_ceb_bible_gloss_generate_book_upload(book_code) {
  const bible_folder = "engbsb";
  let mapped = await ebible_chapters(bible_folder, book_code);
  async function lambda(item) {}
  await each_async(list, lambda);
  let r = await app_ceb_bible_gloss_generate_chapter_upload(
    chapter_code_specified,
  );
  return r;
}
