import { app_ceb_bible_gloss_generate_chapter_upload } from "../../../love/public/src/app_ceb_bible_gloss_generate_chapter_upload.mjs";
export async function app_ceb_bible_gloss_generate_book_upload(
  chapter_code_specified,
) {
  let r = await app_ceb_bible_gloss_generate_chapter_upload(
    chapter_code_specified,
  );
  return r;
}
