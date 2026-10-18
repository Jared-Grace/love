import { text_combine } from "./text_combine.mjs";
import { folder_user_path } from "./folder_user_path.mjs";
export function facebook_psalm_posted_path() {
  "Where the record of psalm lyric videos already posted to facebook is kept, keyed by youtube title - outside the repo, because it is a fact about one account and not code.";
  let left = folder_user_path();
  let r = text_combine(left, "facebook-psalm-posted.json");
  return r;
}
