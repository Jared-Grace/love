import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { gloss_chapters_names_rooted } from "./gloss_chapters_names_rooted.mjs";
import { list_first } from "./list_first.mjs";
export async function app_ceb_bible_gloss_names_rooted() {
  "Every Cebuano explanation that tells a reader what a name is built from, where the name is a word the book it stands in never once writes in small letters.";
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let bible_folder = list_first(bible_folders);
  let r = await gloss_chapters_names_rooted(
    app_ceb_bible_gloss_generate,
    bible_folder,
  );
  return r;
}
