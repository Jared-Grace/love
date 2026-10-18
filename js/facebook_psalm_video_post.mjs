import { facebook_psalm_post_text } from "./facebook_psalm_post_text.mjs";
import { facebook_video_post } from "./facebook_video_post.mjs";
export async function facebook_psalm_video_post(file_path) {
  "$plain file_path";
  "Posts one psalm lyric video to facebook, its words being the passage put to music and the verses, read off the description file the youtube upload used beside it.";
  let text = await facebook_psalm_post_text(file_path + ".description.txt");
  let r = await facebook_video_post(file_path, text);
  return r;
}
