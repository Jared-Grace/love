import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_bible_sermon_posted_path } from "./facebook_bible_sermon_posted_path.mjs";
import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
import { facebook_bible_sermon_after } from "./facebook_bible_sermon_after.mjs";
import { facebook_bible_sermon_post_text } from "./facebook_bible_sermon_post_text.mjs";
import { facebook_bible_chapter_tried_up_is } from "./facebook_bible_chapter_tried_up_is.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { facebook_text_post } from "./facebook_text_post.mjs";
export async function facebook_bible_sermon_post_next() {
  arguments_assert(arguments, 0);
  ("Posts to facebook the next approved sermon passage after the last one recorded, then records it - so one scheduled run is one sermon. Romans first, in the order the sermons app offers its chapters.");
  ("★ IT TAKES NOTHING ON PURPOSE: it is run by a timer and finds its own next passage from the record.");
  ("★ NO LINK IS COMMENTED YET. The sermons app is not public, so a link would send a reader to a page they cannot open; the comment is added once it is.");
  ("★ THE RECORD NAMES THE PASSAGE BEING TRIED BEFORE ANYTHING IS PRESSED. A run can stop after Post went through, with nothing recorded, so the next run looks for that passage first: found, it records it; not found, it posts. The same check the chapter posts use, asked about a passage named by its chapter and verses together.");
  ("★ PAST THE LAST APPROVED PASSAGE IT POSTS NOTHING and answers done, rather than starting over.");
  let record_path = facebook_bible_sermon_posted_path();
  let record = await file_read_json_exists_ensure(record_path);
  let last_chapter = record.chapter_code ?? null;
  let last_key = record.verses_key ?? null;
  let next = await facebook_bible_sermon_after(last_chapter, last_key);
  if (equal(next, null)) {
    let r2 = {
      done: true,
      last_chapter,
      last_key,
    };
    return r2;
  }
  let chapter_code = next.chapter_code;
  let passage = next.passage;
  let verses_key = passage.verse_numbers.join(",");
  let trying = chapter_code + " " + verses_key;
  let text = await facebook_bible_sermon_post_text(chapter_code, passage);
  let heading = text.split("\n")[0];
  let up = await facebook_bible_chapter_tried_up_is(record, trying, heading);
  let r = {
    found_up: true,
  };
  if (not(up)) {
    await file_overwrite_json(record_path, {
      ...record,
      trying,
    });
    r = await facebook_text_post(text);
  }
  await file_overwrite_json(record_path, {
    chapter_code,
    verses_key,
    posted_at: new Date().toISOString(),
  });
  r.posted = trying;
  return r;
}
