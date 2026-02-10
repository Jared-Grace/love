import { app_original_bible_gloss_generate_chapter_code_specified } from "../../../love/public/src/app_original_bible_gloss_generate_chapter_code_specified.mjs";
import { app_gloss_bible_generate_generic } from "../../../love/public/src/app_gloss_bible_generate_generic.mjs";
export async function app_original_bible_gloss_generate() {
  let chapter_code_specified =
    app_original_bible_gloss_generate_chapter_code_specified();
  let bible_folder = "engbsb";
  let language = "Greek";
  let fn = app_original_bible_gloss_generate;
  const bible_folders = [bible_folder];
  let last = "English is";
  await app_gloss_bible_generate_generic(
    language,
    last,
    bible_folders,
    null,
    fn,
    chapter_code_specified,
  );
}
