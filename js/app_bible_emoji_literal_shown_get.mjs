import { storage_local_flag_get } from "./storage_local_flag_get.mjs";
export function app_bible_emoji_literal_shown_get() {
  "Whether this reader has asked for the pictures word for word, in the original's order, remembered on their own device between visits.";
  "ENGLISH ORDER is what an unanswered question means, because that is the drawing the key and the English are read beside.";
  let shown = storage_local_flag_get(
    app_bible_emoji_literal_shown_get,
    "literal_shown",
  );
  return shown;
}
