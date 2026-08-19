import { app_emoji_bible_tradition_other } from "./app_emoji_bible_tradition_other.mjs";
import { app_emoji_bible_tradition_get } from "./app_emoji_bible_tradition_get.mjs";
import { app_emoji_bible_tradition_set } from "./app_emoji_bible_tradition_set.mjs";
export function app_emoji_bible_tradition_toggle() {
  "Move the reader to the other way of drawing, and hand back the one they are now on.";
  "Two drawings today, so the control that changes them is one button that swaps rather than a list to pick from. A list of two is a list that has spent a screen to ask a yes or no question. On the day a third tradition is drawn this becomes a picker, and that is the day to build one.";
  let name = app_emoji_bible_tradition_get();
  let next = app_emoji_bible_tradition_other(name);
  app_emoji_bible_tradition_set(next);
  return next;
}
