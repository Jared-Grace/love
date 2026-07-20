import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { app_shared_gloss_bible_generate_generic } from "./app_shared_gloss_bible_generate_generic.mjs";
export async function app_original_bible_gloss_generate_chapter(
  chapter_code_specified,
) {
  let book_code = ebible_chapter_code_to_book(chapter_code_specified);
  let bible_folder = ebible_folder_english();
  let language = "Greek";
  let fn = app_original_bible_gloss_generate;
  let bible_folders = [bible_folder];
  let last = "English is";
  await app_shared_gloss_bible_generate_generic(
    language,
    last,
    bible_folders,
    book_code,
    fn,
    chapter_code_specified,
  );
}
