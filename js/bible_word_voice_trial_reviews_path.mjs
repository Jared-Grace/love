import { fn_name } from "./fn_name.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
export function bible_word_voice_trial_reviews_path() {
  "Where the picks and comments from the Google voice trial are kept on this machine, filed under the function that writes them.";
  let f_name = fn_name("bible_word_voice_trial_review_set");
  let path = storage_function_path(f_name, "reviews.json");
  return path;
}
