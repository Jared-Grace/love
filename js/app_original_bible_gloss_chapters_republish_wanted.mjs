import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_republish_wanted_generic } from "./gloss_chapters_republish_wanted_generic.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_chapters_uploaded } from "./app_original_bible_gloss_chapters_uploaded.mjs";
export async function app_original_bible_gloss_chapters_republish_wanted() {
  "Which chapters of the Bible explained in its own Hebrew and Greek words a republish would carry up right now, worked out without sending anything.";
  "It is the price of the send, asked before the send. Nothing leaves the machine, two folders are walked, and the answer comes back in under a second.";
  "It is also how the narrowing is checked at all: the sending half cannot be tried out, because a chapter cannot be sent a little.";
  arguments_assert(arguments, 0);
  let r = await gloss_chapters_republish_wanted_generic(
    app_original_bible_gloss_generate,
    app_original_bible_gloss_chapters_uploaded,
  );
  return r;
}
