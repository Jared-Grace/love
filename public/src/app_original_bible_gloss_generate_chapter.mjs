import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { app_gloss_bible_generate_generic } from "../../../love/public/src/app_gloss_bible_generate_generic.mjs";
export async function app_original_bible_gloss_generate_chapter(
  chapter_code_specified,
) {
  let book_code = ebible_chapter_code_to_book(chapter_code_specified);
  let bible_folder = "engbsb";
  let language = "Greek";
  let fn = app_original_bible_gloss_generate_chapter;
  const bible_folders = [bible_folder];
  let last = "English is";
  await app_gloss_bible_generate_generic(
    language,
    last,
    bible_folders,
    book_code,
    fn,
    chapter_code_specified,
  );
}
