import { app_emoji_bible_key_shown_get } from "./app_emoji_bible_key_shown_get.mjs";
import { not } from "./not.mjs";
import { app_emoji_bible_key_shown_set } from "./app_emoji_bible_key_shown_set.mjs";
export function app_emoji_bible_key_shown_toggle() {
  "Put the key up if it is down and down if it is up, and hand back where it now stands.";
  "It is one button rather than two, because showing and hiding are the two halves of one question and a reader can see from the page which half they are in.";
  let shown = app_emoji_bible_key_shown_get();
  let next = not(shown);
  app_emoji_bible_key_shown_set(next);
  return next;
}
