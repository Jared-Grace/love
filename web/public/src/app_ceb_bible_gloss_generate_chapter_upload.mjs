import { app_ceb_bible_gloss_generate_chapter } from "../../../love/public/src/app_ceb_bible_gloss_generate_chapter.mjs";
export async function app_ceb_bible_gloss_generate_chapter_upload(
  chapter_code_specified,
) {
  let v = await app_ceb_bible_gloss_generate_chapter(chapter_code_specified);
  return v;
}
