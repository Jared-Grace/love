import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_republish_generic } from "./gloss_chapters_republish_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_uploaded } from "./app_en_learn_bible_gloss_urdu_chapters_uploaded.mjs";
import { app_en_learn_bible_gloss_urdu_chapter_upload_stored } from "./app_en_learn_bible_gloss_urdu_chapter_upload_stored.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_republish() {
  "Carry up again every chapter of English words explained in Urdu that a reader can already reach and that has been changed since it was last sent, so that what is in front of them is what the store says today.";
  "That is how the welded Urdu spellings stayed in front of readers after the store was put right, which is why this was the first of the three stores to get such a command.";
  ("★ THE REPAIR THIS STORE NEEDS FIRST IS THE ONE FOR RETIRED WORDINGS. Retiring a wording from the settled tables changes what the tables say and changes nothing in the store, because the store holds the sentence that was written into it on the day the chapter was generated. ",
    fn_name("app_en_learn_bible_gloss_urdu_settled_wording_apply"),
    " is the command that puts those entries right, and it has to be run first; run this one on its own after a retirement and nothing is found changed, because the retirement changed the tables and not the store.");
  ("That happened on 2026-09-24, in the eighth round of retirements: the sweep finished, reported every chapter republished, and the retired sentences were still sitting in the store where the upload had read them. Nothing failed and nothing said anything. The shared body no longer reads that way - it would now report nothing republished, which is the same fact asked as a question.");
  arguments_assert(arguments, 0);
  let r = await gloss_chapters_republish_generic(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_chapters_uploaded,
    app_en_learn_bible_gloss_urdu_chapter_upload_stored,
  );
  return r;
}
