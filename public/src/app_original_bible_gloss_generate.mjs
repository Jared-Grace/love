import { app_ceb_bible_gloss_generate_generic } from "../../../love/public/src/app_ceb_bible_gloss_generate_generic.mjs";
import { app_ceb_bible_gloss_generate_property } from "../../../love/public/src/app_ceb_bible_gloss_generate_property.mjs";
export async function app_original_bible_gloss_generate() {
  let bible_folder = "engbsb";
  let book_code = "1PE";
  let language = "Greek";
  let fn = app_original_bible_gloss_generate;
  let property_name = app_ceb_bible_gloss_generate_property();
  const bible_folders = [bible_folder];
  let last = "English is";
  await app_ceb_bible_gloss_generate_generic(
    language,
    last,
    bible_folders,
    book_code,
    fn,
    property_name,
    "ceb",
  );
}
