import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_bible_chapter_posted_path } from "./facebook_bible_chapter_posted_path.mjs";
import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
import { facebook_bible_chapter_after } from "./facebook_bible_chapter_after.mjs";
import { facebook_bible_chapter_post_text } from "./facebook_bible_chapter_post_text.mjs";
import { facebook_text_post } from "./facebook_text_post.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { facebook_post_url_wait } from "./facebook_post_url_wait.mjs";
import { facebook_bible_chapter_url } from "./facebook_bible_chapter_url.mjs";
import { facebook_reel_comment } from "./facebook_reel_comment.mjs";
export async function facebook_bible_chapter_post_next() {
  arguments_assert(arguments, 0);
  ("Posts to facebook the next chapter of the Berean Standard Bible after the last one recorded, records it, then comments a link to read it on the site - so one scheduled run is one chapter.");
  ("★ IT TAKES NOTHING ON PURPOSE: it is run by a timer and finds its own next chapter from the record.");
  ("★ THE RECORD IS WRITTEN AS SOON AS THE POST IS UP, BEFORE THE LINK. A post that failed is retried by the next run, because nothing was recorded; a comment that failed is answered as comment_error and the post stands, or the next run would post the chapter twice.");
  let record_path = facebook_bible_chapter_posted_path();
  let record = await file_read_json_exists_ensure(record_path);
  let last = record.chapter_code ?? null;
  let chapter_code = await facebook_bible_chapter_after(last);
  let text = await facebook_bible_chapter_post_text(chapter_code);
  let r = await facebook_text_post(text);
  await file_overwrite_json(record_path, {
    chapter_code,
    posted_at: new Date().toISOString(),
  });
  r.posted = chapter_code;
  try {
    let heading = text.split("\n")[0];
    let post_url = await facebook_post_url_wait(heading);
    let link = facebook_bible_chapter_url(chapter_code);
    r.comment = await facebook_reel_comment(post_url, link);
  } catch (e) {
    r.comment_error = e.message;
  }
  return r;
}
