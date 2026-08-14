import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { gloss_chapters_absent_generic } from "./gloss_chapters_absent_generic.mjs";
import { list_first } from "./list_first.mjs";
export async function app_ceb_bible_gloss_chapters_absent() {
  "Every chapter of the New Testament the Cebuano gloss store has not been started on.";
  "The bible read is the Cebuano one the store's own chapter builder names, rather than a version chosen here. A chapter is absent from this store only if it is missing from the wording the explanations are about, and a different version numbering its chapters differently would name chapters nobody here is waiting on.";
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let bible_folder = list_first(bible_folders);
  let r = await gloss_chapters_absent_generic(
    app_ceb_bible_gloss_generate,
    bible_folder,
  );
  return r;
}
