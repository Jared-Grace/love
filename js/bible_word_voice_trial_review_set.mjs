import { bible_word_voice_trial_reviews } from "./bible_word_voice_trial_reviews.mjs";
import { bible_word_voice_trial_reviews_path } from "./bible_word_voice_trial_reviews_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function bible_word_voice_trial_review_set(id, pick, note) {
  "$plain id";
  "$plain pick";
  "$plain note";
  "Keeps the pick and comment for one word of the Google voice trial, replacing what that word held before and keeping every other word's.";
  "It replaces rather than appends because the screen always sends the whole of what the box and the buttons show now, so the latest is the whole answer.";
  let reviews = await bible_word_voice_trial_reviews();
  reviews[id] = {
    pick,
    note,
  };
  let path = bible_word_voice_trial_reviews_path();
  await file_overwrite_json(path, reviews);
  let r = reviews[id];
  return r;
}
