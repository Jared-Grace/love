import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_uploaded } from "./app_en_learn_bible_gloss_urdu_chapters_uploaded.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { app_en_learn_bible_gloss_urdu_chapter_upload_stored } from "./app_en_learn_bible_gloss_urdu_chapter_upload_stored.mjs";
import { list_size } from "./list_size.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_republish() {
  "Carry every chapter of English words explained in Urdu that a reader can already reach up again, so that what is in front of them is what the store says today.";
  "Publishing a chapter that has never been published is a different question and is asked elsewhere. This one exists because the command that finds its own set asks which chapters are missing from the bucket, and a chapter that is up there but out of date is not missing - so a repair made in the store after publishing reaches nobody, and nothing anywhere says so. That is how the welded Urdu spellings stayed in front of readers after the store was put right.";
  "The set is the published chapters rather than every chapter in the store, which is what keeps this from being a way of publishing something by accident. Every chapter it touches is one somebody already decided a reader should have; all that changes is which version of it they get.";
  "They go one at a time rather than together, so a chapter that fails to arrive is one chapter and the rest still go.";
  arguments_assert(arguments, 0);
  let chapter_codes = await app_en_learn_bible_gloss_urdu_chapters_uploaded();
  await list_map_async(
    chapter_codes,
    app_en_learn_bible_gloss_urdu_chapter_upload_stored,
  );
  let r = {
    republished: list_size(chapter_codes),
    chapter_codes,
  };
  return r;
}
