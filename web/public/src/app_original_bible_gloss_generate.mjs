import { app_ceb_bible_gloss_generate_generic } from "../../../love/public/src/app_ceb_bible_gloss_generate_generic.mjs";
export async function app_original_bible_gloss_generate() {
  let bible_folder = "engbsb";
  let chapter_code_specified = "1PE04";
  let language = "Greek";
  let fn = app_original_bible_gloss_generate;
  const bible_folders = [bible_folder];
  let last = "English is";
  await app_ceb_bible_gloss_generate_generic(
    language,
    last,
    null,
    book_code,
    fn,
    chapter_code_specified,
  );
}
