import { facebook_psalm_post_text } from "./facebook_psalm_post_text.mjs";
import { file_read } from "./file_read.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { video_frame_write } from "./video_frame_write.mjs";
import { facebook_reel_newest_url } from "./facebook_reel_newest_url.mjs";
import { facebook_video_post } from "./facebook_video_post.mjs";
import { facebook_reel_new_wait } from "./facebook_reel_new_wait.mjs";
import { facebook_reel_cover_set } from "./facebook_reel_cover_set.mjs";
import { facebook_psalm_bible_url } from "./facebook_psalm_bible_url.mjs";
import { facebook_reel_comment } from "./facebook_reel_comment.mjs";
export async function facebook_psalm_video_post(file_path) {
  "$plain file_path";
  "Posts one psalm lyric video to facebook, its words being the passage put to music and the verses, read off the description file the youtube upload used beside it. Once the reel shows, it sets the reel's cover and comments a link to the passage in the bible reader.";
  let description_path = file_path + ".description.txt";
  let text = await facebook_psalm_post_text(description_path);
  let description = await file_read(description_path);
  let passage = description.split("\n")[0].split(" (BSB)")[0];
  ("The cover is the frame two seconds in: by then the first painting and the opening words are on screen, where the first frame is still dark. Measured 2026-10-20 on Psalm 149: half a second in was already the full picture.");
  let cover_path = folder_gitignore_join("facebook_reel_cover.jpg");
  await video_frame_write(file_path, 2, cover_path);
  let before_url = await facebook_reel_newest_url();
  let r = await facebook_video_post(file_path, text, cover_path);
  ("★ THE COVER AND THE COMMENT COME AFTER POSTING, AND NEITHER'S FAILURE FAILS THE POST. Once the post is up it must be recorded, or the next run would post the same film again; so a step that could not be done is answered as cover_error or comment_error, for the log, and the post stands.");
  let reel_url = null;
  try {
    reel_url = await facebook_reel_new_wait(before_url);
  } catch (e) {
    r.cover_error = e.message;
    r.comment_error = e.message;
    return r;
  }
  try {
    r.cover = await facebook_reel_cover_set(reel_url, cover_path);
  } catch (e) {
    r.cover_error = e.message;
  }
  try {
    let link = facebook_psalm_bible_url(passage);
    r.comment = await facebook_reel_comment(reel_url, link);
  } catch (e) {
    r.comment_error = e.message;
  }
  return r;
}
