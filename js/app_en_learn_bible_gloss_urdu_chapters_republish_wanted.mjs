import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_republish_wanted_generic } from "./gloss_chapters_republish_wanted_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_uploaded } from "./app_en_learn_bible_gloss_urdu_chapters_uploaded.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_republish_wanted() {
  "Which chapters of the Bible explained in Urdu for English readers a republish would carry up right now, worked out without sending anything.";
  "Nothing leaves the machine: two folders are walked and the answer comes back in under a second.";
  "It is also how the narrowing is checked at all: the sending half cannot be tried out, because a chapter cannot be sent a little.";
  arguments_assert(arguments, 0);
  let r = await gloss_chapters_republish_wanted_generic(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_chapters_uploaded,
  );
  return r;
}
