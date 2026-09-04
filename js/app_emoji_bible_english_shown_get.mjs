import { storage_local_flag_get } from "./storage_local_flag_get.mjs";
export function app_emoji_bible_english_shown_get() {
  "Whether this reader has asked for the English under each verse on its own, remembered on their own device between visits.";
  "It is a second, smaller offer beside the whole key. The key stacks the language the verse was written in, the English and the Tagalog under every verse, which is four bands of text under a line of pictures; a reader who only wants to check what a verse says wants one of those bands and gets the page back for it.";
  "HIDDEN is what an unanswered question means, for the same reason the key is hidden until it is asked for: a page that prints the English under every picture before anybody asks has quietly become an English Bible with pictures over it.";
  "The whole key answers this question too. A reader who has the key up already has the English in front of them, so this is asked only when the key is down.";
  let shown = storage_local_flag_get(
    app_emoji_bible_english_shown_get,
    "english_shown",
  );
  return shown;
}
