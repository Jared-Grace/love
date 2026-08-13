export function app_code_screen_name_suggestions(word) {
  "The names of the screens spelled most like what somebody wrote where a screen should be.";
  "The same limit the lesson ids are read with, and for the same reason: every one of these names carries the app's own name in front of it, so the part that can be mistyped is the short word at the end and the shared front makes every pair look close. A word that misses by more than three letters is a different word, not a mistyped one.";
  let names = app_code_screen_names();
  let apart_maximum = app_code_lesson_id_apart_maximum();
  let nearest = texts_nearest(names, word, apart_maximum);
  return nearest;
}
