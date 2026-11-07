import { facebook_bible_chapter_post_text } from "./facebook_bible_chapter_post_text.mjs";
import { facebook_post_url_wait } from "./facebook_post_url_wait.mjs";
import { facebook_bible_chapter_url } from "./facebook_bible_chapter_url.mjs";
import { facebook_reel_comment } from "./facebook_reel_comment.mjs";
export async function facebook_bible_chapter_comment_add(chapter_code) {
  "$plain chapter_code";
  "Finds the facebook post of the chapter chapter_code by its heading and comments the link to read it on the site - the repair for a chapter run that posted but answered comment_error.";
  let text = await facebook_bible_chapter_post_text(chapter_code);
  let heading = text.split("\n")[0];
  let post_url = await facebook_post_url_wait(heading);
  let link = facebook_bible_chapter_url(chapter_code);
  let comment = await facebook_reel_comment(post_url, link);
  let r = {
    post_url,
    link,
    comment,
  };
  return r;
}
