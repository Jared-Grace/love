import { app_ceb_bible_gloss_generate_code } from "../../../love/public/src/app_ceb_bible_gloss_generate_code.mjs";
import { app_ceb_bible_gloss_generate_generic } from "../../../love/public/src/app_ceb_bible_gloss_generate_generic.mjs";
import { ebible_folder_cebuano } from "../../../love/public/src/ebible_folder_cebuano.mjs";
import { app_ceb_bible_gloss_generate_property } from "../../../love/public/src/app_ceb_bible_gloss_generate_property.mjs";
export async function app_ceb_bible_gloss_generate() {
  let bible_folder = "engbsb";
  let book_code = "JAS";
  let language = "Cebuano";
  let fn = app_ceb_bible_gloss_generate;
  let property_name = app_ceb_bible_gloss_generate_property();
  let c = ebible_folder_cebuano();
  const bible_folders = [c, bible_folder];
  let last = "original language and English are";
  let language_code = app_ceb_bible_gloss_generate_code();
  await app_ceb_bible_gloss_generate_generic(
    language,
    last,
    bible_folders,
    book_code,
    fn,
    property_name,
    language_code,
    null,
  );
}
