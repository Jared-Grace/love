import { not } from "./not.mjs";
import { bible_word_voice_trial_reviews_path } from "./bible_word_voice_trial_reviews_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function bible_word_voice_trial_reviews() {
  "Every pick and comment made so far on the Google voice trial, keyed by row id such as heb-3: which voice said the word better, and what was heard.";
  "Nothing reviewed yet is an empty record rather than a failure, because that is how every review starts.";
  let path = bible_word_voice_trial_reviews_path();
  let exists = await file_exists(path);
  if (not(exists)) {
    let r = {};
    return r;
  }
  let reviews = await file_read_json(path);
  return reviews;
}
