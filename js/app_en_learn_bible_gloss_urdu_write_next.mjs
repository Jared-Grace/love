import { app_en_learn_bible_gloss_urdu_write_coverage } from "./app_en_learn_bible_gloss_urdu_write_coverage.mjs";
import { app_en_learn_bible_gloss_urdu_write_passage } from "./app_en_learn_bible_gloss_urdu_write_passage.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { objects_merge } from "./objects_merge.mjs";
import { property_get } from "./property_get.mjs";
export async function app_en_learn_bible_gloss_urdu_write_next(chapter_code) {
  "Everything needed to explain the next passage of a chapter that has no English word explanations yet, in the language its Urdu reader already has.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  "It answers with how many passages are still waiting as well as with the one to write, so an author knows whether a chapter is nearly done without asking a second question, and a chapter that is finished says so rather than handing over nothing and leaving that to be read as a failure.";
  let coverage =
    await app_en_learn_bible_gloss_urdu_write_coverage(chapter_code);
  let missing = property_get(coverage, "missing");
  if (list_empty_is(missing)) {
    let finished = {
      chapter_code,
      remaining: 0,
      verse_key: null,
    };
    return finished;
  }
  let verse_key = list_first(missing);
  ("Which passage is next is the whole of this function's own work. Everything the author is handed for it is the same whether the passage has been written before or not, so it is read by the one that takes a passage by name.");
  let handed = await app_en_learn_bible_gloss_urdu_write_passage(
    chapter_code,
    verse_key,
  );
  let left = {
    remaining: list_size(missing),
  };
  let r = objects_merge([handed, left]);
  return r;
}
