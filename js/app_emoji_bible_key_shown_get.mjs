import { storage_local_get } from "./storage_local_get.mjs";
import { null_is } from "./null_is.mjs";
export function app_emoji_bible_key_shown_get() {
  "Whether this reader has asked to see the key under each verse, remembered on their own device between visits.";
  "A reader learning the pictures wants the key up for weeks and a reader who has learned them wants it gone for good, so the answer is kept rather than asked for every visit. It is kept on the device and nowhere else, because how far somebody has got with the pictures is nobody else's business.";
  "HIDDEN is what an unanswered question means. The picture Bible is the thing being offered, and a page that opens with the answer already printed under every verse is a page that has quietly become an English Bible with pictures over it. The reader turns the key on when they want it.";
  let shown = storage_local_get(app_emoji_bible_key_shown_get, "key_shown");
  let missing = null_is(shown);
  if (missing) {
    return false;
  }
  return shown;
}
