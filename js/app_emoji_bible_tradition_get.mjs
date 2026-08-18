import { storage_local_get } from "./storage_local_get.mjs";
import { null_is } from "./null_is.mjs";
import { app_emoji_bible_tradition_base } from "./app_emoji_bible_tradition_base.mjs";
export function app_emoji_bible_tradition_get() {
  "Which way of drawing the glyphs this reader has chosen, remembered on their own device between visits.";
  "A reader who tells a Bible how their own church draws the cross should not have to tell it again tomorrow, so the answer is kept rather than asked for every time. It is kept on the device and nowhere else, because this is a fact about how somebody wants to read and not a fact anybody else has any business holding.";
  "The base drawing is what an unanswered question means, and that is a decision rather than an accident. A reader who has never been asked is shown the drawing the verses were written against, and the tradition is the thing added on top by someone who wanted it.";
  let name = storage_local_get(app_emoji_bible_tradition_get, "tradition");
  let missing = null_is(name);
  if (missing) {
    let name2 = app_emoji_bible_tradition_base();
    return name2;
  }
  return name;
}
