import { storage_local_flag_on_get } from "./storage_local_flag_on_get.mjs";
export function app_bible_emoji_english_shown_get() {
  "Whether this reader has asked for the English under each verse on its own, remembered on their own device between visits.";
  "It is a second, smaller offer beside the whole key. The key stacks the language the verse was written in, the English and the Tagalog under every verse, which is four bands of text under a line of pictures; a reader who only wants to check what a verse says wants one of those bands and gets the page back for it.";
  "SHOWN is what an unanswered question means, decided by the human on 2026-11-25. A newcomer knows none of the pictures, so a page of them with nothing to check against is unreadable, and they leave before finding the setting. The fear that kept it hidden - the page quietly becoming an English Bible with pictures over it - is answered by the switch: a reader who wants the pictures alone turns the English off once, and that answer is kept. The whole key stays hidden until asked for, because it is four bands of text and not one.";
  "The whole key answers this question too. A reader who has the key up already has the English in front of them, so this is asked only when the key is down.";
  let shown = storage_local_flag_on_get(
    app_bible_emoji_english_shown_get,
    "english_shown",
  );
  return shown;
}
