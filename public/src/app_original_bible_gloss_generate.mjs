import { app_ceb_bible_gloss_generate_generic } from "../../../love/public/src/app_ceb_bible_gloss_generate_generic.mjs";
export async function app_original_bible_gloss_generate() {
  let chapter_code_specified = "1PE04";
  let bible_folder = "engbsb";
  let language = "Greek";
  let fn = app_original_bible_gloss_generate;
  const bible_folders = [bible_folder];
  let last = "English is";
  await app_ceb_bible_gloss_generate_generic(
    language,
    last,
    bible_folders,
    null,
    fn,
    chapter_code_specified,
  );
}
