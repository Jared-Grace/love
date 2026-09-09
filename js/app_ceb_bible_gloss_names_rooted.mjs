import { app_ceb_bible_gloss_bible_folder } from "./app_ceb_bible_gloss_bible_folder.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_names_rooted } from "./gloss_chapters_names_rooted.mjs";
export async function app_ceb_bible_gloss_names_rooted() {
  "Every Cebuano explanation that tells a reader what a name is built from, where the name is a word the book it stands in never once writes in small letters.";
  let bible_folder = app_ceb_bible_gloss_bible_folder();
  let r = await gloss_chapters_names_rooted(
    app_ceb_bible_gloss_generate,
    bible_folder,
  );
  return r;
}
