import { folder_user_path } from "./folder_user_path.mjs";
import { text_combine } from "./text_combine.mjs";
export function facebook_psalm_youtube_kept_path() {
  "Where the last list of psalm lyric videos youtube said were public is kept - outside the repo beside the facebook posted record, because it is a fact about one channel and not code.";
  let left = folder_user_path();
  let r = text_combine(left, "facebook-psalm-youtube-public.json");
  return r;
}
