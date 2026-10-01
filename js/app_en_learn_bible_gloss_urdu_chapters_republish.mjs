import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_republish_generic } from "./gloss_chapters_republish_generic.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_uploaded } from "./app_en_learn_bible_gloss_urdu_chapters_uploaded.mjs";
import { app_en_learn_bible_gloss_urdu_chapter_upload_stored } from "./app_en_learn_bible_gloss_urdu_chapter_upload_stored.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_republish() {
  "Carry every chapter of English words explained in Urdu that a reader can already reach up again, so that what is in front of them is what the store says today.";
  "That is how the welded Urdu spellings stayed in front of readers after the store was put right, which is why this was the first of the three stores to get such a command.";
  ("★ THE REPAIR THIS STORE NEEDS FIRST IS THE ONE FOR RETIRED WORDINGS. Retiring a wording from the settled tables changes what the tables say and changes nothing in the store, because the store holds the sentence that was written into it on the day the chapter was generated. ",
    fn_name("app_en_learn_bible_gloss_urdu_settled_wording_apply"),
    " is the command that puts those entries right, and it has to be run first; run this one on its own after a retirement and two hundred and sixty chapters go up again carrying exactly the wordings the retirement was meant to remove.");
  ("That happened on 2026-09-24, in the eighth round of retirements: the sweep finished, reported every chapter republished, and the retired sentences were still sitting in the store where the upload had read them. Nothing failed and nothing said anything, because uploading the store faithfully is the whole of what the shared body does.");
  arguments_assert(arguments, 0);
  let r = await gloss_chapters_republish_generic(
    app_en_learn_bible_gloss_urdu_chapters_uploaded,
    app_en_learn_bible_gloss_urdu_chapter_upload_stored,
  );
  return r;
}
