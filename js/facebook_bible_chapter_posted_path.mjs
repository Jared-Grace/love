import { folder_user_path } from "./folder_user_path.mjs";
import { text_combine } from "./text_combine.mjs";
export function facebook_bible_chapter_posted_path() {
  "Where the record of the last bible chapter posted to facebook is kept - outside the repo, because it is a fact about one account and not code.";
  let left = folder_user_path();
  let r = text_combine(left, "facebook-bible-chapter-posted.json");
  return r;
}
