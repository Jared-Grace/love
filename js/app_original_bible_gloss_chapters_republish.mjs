import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_republish_generic } from "./gloss_chapters_republish_generic.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_chapters_uploaded } from "./app_original_bible_gloss_chapters_uploaded.mjs";
import { app_original_bible_gloss_chapter_upload_stored } from "./app_original_bible_gloss_chapter_upload_stored.mjs";
export async function app_original_bible_gloss_chapters_republish() {
  "Carry up again every chapter of the Bible explained in its own Hebrew and Greek words that a reader can already reach and that has been changed since it was last sent, so that what is in front of them is what the store says today.";
  ("★ THE REPAIR THIS STORE NEEDS FIRST IS THE ONE FOR LETTERS THAT LOOK THE SAME. An accented Hebrew or Greek letter has more than one spelling of the same characters, so a word can be explained under a spelling the passage does not carry and the two are identical to look at. ",
    fn_name("app_original_bible_gloss_words_unicode_repair_all"),
    " puts the passage's own letters back across every chapter at once and finds its own work; it has to be run before this, because what goes up is the store as it stands.");
  ("Measured 2026-10-01: that repair mended one chapter, JDG06, which turned out not to be published yet - so nothing was stranded that day. The command is here for the day the same repair lands on a chapter that is published, when nothing anywhere would say so.");
  arguments_assert(arguments, 0);
  let r = await gloss_chapters_republish_generic(
    app_original_bible_gloss_generate,
    app_original_bible_gloss_chapters_uploaded,
    app_original_bible_gloss_chapter_upload_stored,
  );
  return r;
}
