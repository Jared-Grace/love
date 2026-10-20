import { facebook_psalm_post_text } from "./facebook_psalm_post_text.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { video_frame_write } from "./video_frame_write.mjs";
import { facebook_video_post } from "./facebook_video_post.mjs";
export async function facebook_psalm_video_post(file_path) {
  "$plain file_path";
  "Posts one psalm lyric video to facebook, its words being the passage put to music and the verses, read off the description file the youtube upload used beside it.";
  let text = await facebook_psalm_post_text(file_path + ".description.txt");
  ("The cover is the frame two seconds in: by then the first painting and the opening words are on screen, where the first frame is still dark. Measured 2026-10-20 on Psalm 149: half a second in was already the full picture.");
  let cover_path = folder_gitignore_join("facebook_reel_cover.jpg");
  await video_frame_write(file_path, 2, cover_path);
  let r = await facebook_video_post(file_path, text, cover_path);
  return r;
}
