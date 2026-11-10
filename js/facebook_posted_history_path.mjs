import { folder_user_path } from "./folder_user_path.mjs";
import { text_combine } from "./text_combine.mjs";
export function facebook_posted_history_path() {
  "Where the history of every facebook post is kept - one line of JSON per post, never overwritten - outside the repo, because it is a fact about one account and not code.";
  let left = folder_user_path();
  let r = text_combine(left, "facebook-posted-history.jsonl");
  return r;
}
