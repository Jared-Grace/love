import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_republish_generic } from "./gloss_chapters_republish_generic.mjs";
import { app_ceb_bible_gloss_chapters_uploaded } from "./app_ceb_bible_gloss_chapters_uploaded.mjs";
import { app_ceb_bible_gloss_chapter_upload_stored } from "./app_ceb_bible_gloss_chapter_upload_stored.mjs";
export async function app_ceb_bible_gloss_chapters_republish() {
  "Carry every chapter of the Bible explained in Cebuano that a reader can already reach up again, so that what is in front of them is what the store says today.";
  ("★ THIS STORE IS MENDED BY SEVERAL COMMANDS AND NONE OF THEM IS NAMED HERE AS THE ONE TO RUN FIRST, BECAUSE THERE IS NO SUCH ONE. ",
    fn_name("app_ceb_bible_gloss_explains_repair"),
    ", ",
    fn_name("app_ceb_bible_gloss_explains_unnamed_source_repair"),
    " and ",
    fn_name("app_ceb_bible_gloss_punctuation_entries_repair"),
    " each answer a different fault in the stored sentences. Whichever of them you ran is what has to come before this, because what goes up is the store as it stands; run this on its own and the fault goes back up untouched while the sweep reports every chapter republished.");
  ("The alphabet is Latin, so the fault that this store cannot have is the one that looks like nothing: two spellings of the same characters. What goes wrong here is a sentence that was written and later decided against, which is visible to read and invisible to a reader who was given the chapter before the decision.");
  arguments_assert(arguments, 0);
  let r = await gloss_chapters_republish_generic(
    app_ceb_bible_gloss_chapters_uploaded,
    app_ceb_bible_gloss_chapter_upload_stored,
  );
  return r;
}
