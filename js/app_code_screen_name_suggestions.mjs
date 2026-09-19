import { app_code_screen_names } from "./app_code_screen_names.mjs";
import { app_code_lesson_id_apart_maximum } from "./app_code_lesson_id_apart_maximum.mjs";
import { texts_nearest } from "./texts_nearest.mjs";
export function app_code_screen_name_suggestions(word) {
  "The names of the screens spelled most like what somebody wrote where a screen should be.";
  "The same limit the lesson ids are read with, and for the same reason: the names are compared short, with the app's own name off the front, because a shared front makes every pair look close and a link is written with the short word anyway - so the word offered back is the word the link will carry. A word that misses by more than three letters is a different word, not a mistyped one.";
  let names = app_code_screen_names_short(); let short = app_code_screen_name_short(word);
  let apart_maximum = app_code_lesson_id_apart_maximum();
  let nearest = texts_nearest(names, short, apart_maximum);
  return nearest;
}
