import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { app_ceb_bible_gloss_generate_generic } from "../../../love/public/src/app_ceb_bible_gloss_generate_generic.mjs";
import { ebible_folder_cebuano } from "../../../love/public/src/ebible_folder_cebuano.mjs";
import { app_ceb_bible_gloss_generate } from "../../../love/public/src/app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_generate_chapter(
  chapter_code_specified,
) {
  let book_code = ebible_chapter_code_to_book(chapter_code_specified);
  let language = "Cebuano";
  let fn = app_ceb_bible_gloss_generate;
  let c = ebible_folder_cebuano();
  let bible_folder = "engbsb";
  const bible_folders = [c, bible_folder];
  let last = "original language and English are";
  await app_ceb_bible_gloss_generate_generic(
    language,
    last,
    bible_folders,
    book_code,
    fn,
    chapter_code_specified,
  );
}
