import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_republish_wanted_generic } from "./gloss_chapters_republish_wanted_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_chapters_uploaded } from "./app_ceb_bible_gloss_chapters_uploaded.mjs";
export async function app_ceb_bible_gloss_chapters_republish_wanted() {
  "Which chapters of the Bible explained in Cebuano a republish would carry up right now, worked out without sending anything.";
  "This is the store the asking exists for. 968 chapters were published on 2026-10-02 and sending all of them took the better part of an hour, so the difference between a repair that touched four chapters and a run over all of them is most of an hour of somebody's day.";
  "Nothing leaves the machine: two folders are walked and the answer comes back in under a second.";
  arguments_assert(arguments, 0);
  let r = await gloss_chapters_republish_wanted_generic(
    app_ceb_bible_gloss_generate,
    app_ceb_bible_gloss_chapters_uploaded,
  );
  return r;
}
