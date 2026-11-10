import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_bible_chapter_posted_path } from "./facebook_bible_chapter_posted_path.mjs";
import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
import { facebook_bible_chapter_after } from "./facebook_bible_chapter_after.mjs";
import { facebook_bible_chapter_post_text } from "./facebook_bible_chapter_post_text.mjs";
import { facebook_bible_chapter_tried_up_is } from "./facebook_bible_chapter_tried_up_is.mjs";
import { not } from "./not.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { facebook_text_post } from "./facebook_text_post.mjs";
import { facebook_bible_chapter_comment_add } from "./facebook_bible_chapter_comment_add.mjs";
import { facebook_posted_history_add } from "./facebook_posted_history_add.mjs";
export async function facebook_bible_chapter_post_next() {
  arguments_assert(arguments, 0);
  ("Posts to facebook the next chapter of the Berean Standard Bible after the last one recorded, records it, then comments a link to read it on the site - so one scheduled run is one chapter.");
  ("★ IT TAKES NOTHING ON PURPOSE: it is run by a timer and finds its own next chapter from the record.");
  ("★ THE RECORD IS WRITTEN AS SOON AS THE POST IS UP, BEFORE THE LINK. A post that failed is retried by the next run, because nothing was recorded; a comment that failed is answered as comment_error and the post stands, or the next run would post the chapter twice.");
  ("★ THE RECORD NAMES THE CHAPTER BEING TRIED BEFORE ANYTHING IS PRESSED. A run can stop after Post went through, with nothing recorded, so the next run looks for that chapter first: found, it records it and adds the link; not found, it posts.");
  let record_path = facebook_bible_chapter_posted_path();
  let record = await file_read_json_exists_ensure(record_path);
  let last = record.chapter_code ?? null;
  let chapter_code = await facebook_bible_chapter_after(last);
  let text = await facebook_bible_chapter_post_text(chapter_code);
  let heading = text.split("\n")[0];
  let up = await facebook_bible_chapter_tried_up_is(
    record,
    chapter_code,
    heading,
  );
  let r = {
    found_up: true,
  };
  if (not(up)) {
    await file_overwrite_json(record_path, {
      ...record,
      trying: chapter_code,
    });
    r = await facebook_text_post(text);
  }
  await file_overwrite_json(record_path, {
    chapter_code,
    posted_at: new Date().toISOString(),
  });
  r.posted = chapter_code;
  try {
    r.comment = await facebook_bible_chapter_comment_add(chapter_code);
  } catch (e) {
    r.comment_error = e.message;
  }
  r.history = await facebook_posted_history_add({
    kind: "chapter",
    chapter_code,
    url: r.comment?.post_url ?? null,
  });
  return r;
}
