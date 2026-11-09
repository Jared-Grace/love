import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_post_url_wait } from "./facebook_post_url_wait.mjs";
import { facebook_bible_sermon_url } from "./facebook_bible_sermon_url.mjs";
import { facebook_reel_comment } from "./facebook_reel_comment.mjs";
export async function facebook_bible_sermon_comment_add(
  heading,
  chapter_code,
  verse_number,
) {
  arguments_assert(arguments, 3);
  ("$plain heading");
  ("$plain chapter_code");
  ("$plain verse_number");
  ("Finds the facebook sermon post whose first line is heading and comments the link to read on in the sermons app, opened on verse_number of chapter_code - also the repair for a sermon run that posted but answered comment_error.");
  let post_url = await facebook_post_url_wait(heading);
  let link = facebook_bible_sermon_url(chapter_code, verse_number);
  let comment = await facebook_reel_comment(post_url, link);
  let r = {
    post_url,
    link,
    comment,
  };
  return r;
}
