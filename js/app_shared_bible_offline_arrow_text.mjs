import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_offline_arrow_text(label) {
  "A word from the offline part of the bible with the arrow that means down in front of it.";
  "Every button and heading here is offering the same thing - a copy of the bible coming down onto the thing in your hand - so they all wear the same arrow, and the arrow is put on in one place so they cannot drift into wearing different ones.";
  "The arrow is not turned round for a reader who reads from the right. It faces down because what it means is down, and that is the same direction for everybody. Only a picture whose meaning reverses is turned, which is why this one asks nobody.";
  arguments_assert(arguments, 1);
  let arrow = emoji_arrow_down();
  let text = text_combine(arrow, label);
  return text;
}
