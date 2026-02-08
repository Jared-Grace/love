import { app_ceb_bible_gloss_generate_chapter } from "../../../love/public/src/app_ceb_bible_gloss_generate_chapter.mjs";
export async function app_ceb_bible_gloss_generate() {
  let chapter_code_specified = "JAS03";
  await app_ceb_bible_gloss_generate_chapter(chapter_code_specified);
}
