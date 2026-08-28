import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_pictures_button } from "./app_bible_pictures_button.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
export function app_bible_pictures_chapter_button(content, chapter_code) {
  arguments_assert(arguments, 2);
  ("The way into the picture Bible put at the foot of a whole chapter, under the last verse of it.");
  ("$plain chapter_code");
  ("AT THE FOOT AND NOT IN THE BAR, because it is the thing to do AFTER reading a chapter rather than a control over what is being read - which is where the picture Bible puts the same link back the other way, so the two pages hand each other over in the same place.");
  ("The chapter is handed in rather than read out of the address, because this screen can arrive at a chapter by following a reference the address never spelled.");
  ("A gap above it, because it stands under prose rather than beside other buttons, and a button hard against the last line of a chapter reads as part of the chapter.");
  let component = app_bible_pictures_button(content, chapter_code);
  let drawn = null_not_is(component);
  if (drawn) {
    app_shared_button_gap_above(component);
  }
}
