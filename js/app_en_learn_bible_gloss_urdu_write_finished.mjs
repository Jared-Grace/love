import { app_en_learn_bible_gloss_urdu_chapters_uploaded } from "./app_en_learn_bible_gloss_urdu_chapters_uploaded.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { app_en_learn_bible_gloss_urdu_chapter_upload_stored } from "./app_en_learn_bible_gloss_urdu_chapter_upload_stored.mjs";
import { ternary } from "./ternary.mjs";
export async function app_en_learn_bible_gloss_urdu_write_finished(
  chapter_code,
) {
  "What to tell an author who has just explained the last passage of a chapter: that nothing is left to write, and whether the chapter has reached a reader yet.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to ask after and nothing that runs.";
  "The moment the last passage is written is the moment a chapter can be forgotten, because writing it and publishing it are separate steps and only the first of them has an obvious end. So the answer saying there is nothing left to write is the one place where saying whether it went anywhere costs nothing - the author is reading it already, and they are reading it at exactly the moment the gap opens.";
  "A gate over the whole repo catches the same thing, and it is kept, because this only reaches an author who happened to ask. What it does instead is not wait: the gate is a quarter of an hour away and behind everything else in that run, while this is one question asked beside one already being asked.";
  "Whether it went up is asked of the bucket rather than of anything written down here. The chapter is written on one machine and fetched by a page somewhere else, so the place the page fetches from is the only one that knows.";
  "The command that publishes it is named rather than described, because whoever reads this wants the next thing to type, and nothing in its place is how a chapter already up says there is nothing to type at all.";
  let published_codes = await app_en_learn_bible_gloss_urdu_chapters_uploaded();
  let published = list_includes(published_codes, chapter_code);
  let waiting = not(published);
  let upload_name = app_en_learn_bible_gloss_urdu_chapter_upload_stored.name;
  let publish_with = ternary(waiting, upload_name, null);
  let r = {
    chapter_code,
    remaining: 0,
    verse_key: null,
    published,
    publish_with,
  };
  return r;
}
