import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { lyric_video_words_screen_text } from "./lyric_video_words_screen_text.mjs";
import { list_add } from "./list_add.mjs";
export function lyric_video_words_screens_bound(bounds, seconds, words) {
  "Turns a list of first-and-last word numbers into the screens themselves, each one carrying the words that fall between those two and the moment it comes up and the moment it goes.";
  "★ THE FIRST SCREEN OPENS AT NOTHING AND THE LAST ONE RUNS TO THE END OF THE RECORDING, RATHER THAN EITHER OF THEM BEING PLACED BY A WORD. Every screen in the middle is placed by words - it comes up as its own first word is sung and goes as the next screen's first word is - but there is no word before the first screen and none after the last, so placing those two by a word would leave the singing starting and ending with nothing on screen.";
  arguments_assert(arguments, 3);
  let screens = [];
  let order = 0;
  while (less_than(order, list_size(bounds))) {
    let bound = bounds[order];
    let from = bound[0];
    let to = bound[1];
    let start = seconds;
    let opening = less_than(order, 1);
    if (opening) {
      start = 0;
    } else {
      start = property_get(words[from], "start");
    }
    let end = seconds;
    let a = add(order, 1);
    let b = list_size(bounds);
    let more = less_than(a, b);
    if (more) {
      end = property_get(words[to], "start");
    }
    let screen = {
      start: start,
      end: end,
      text: lyric_video_words_screen_text(from, to, words),
    };
    list_add(screens, screen);
    order = add(order, 1);
  }
  return screens;
}
