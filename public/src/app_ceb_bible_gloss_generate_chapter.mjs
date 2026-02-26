import { app_ceb_bible_gloss_generate_chapter_language } from "../../../love/public/src/app_ceb_bible_gloss_generate_chapter_language.mjs";
import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "../../../love/public/src/app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { app_gloss_bible_generate_generic } from "../../../love/public/src/app_gloss_bible_generate_generic.mjs";
import { app_ceb_bible_gloss_generate } from "../../../love/public/src/app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_generate_chapter(
  chapter_code_specified,
) {
  let book_code = ebible_chapter_code_to_book(chapter_code_specified);
  let language = app_ceb_bible_gloss_generate_chapter_language();
  let fn = app_ceb_bible_gloss_generate;
  const bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let last = "original language and English are";
  await app_gloss_bible_generate_generic(
    language,
    last,
    bible_folders,
    book_code,
    fn,
    chapter_code_specified,
  );
}
