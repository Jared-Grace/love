import { arguments_assert } from "./arguments_assert.mjs";
import { audio_pieces_words_timed } from "./audio_pieces_words_timed.mjs";
import { bible_audio_chapter_screens_timed_report } from "./bible_audio_chapter_screens_timed_report.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { lyric_video_words_screens } from "./lyric_video_words_screens.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { add } from "./add.mjs";
import { number_hundredths_rounded } from "./number_hundredths_rounded.mjs";
import { each_index } from "./each_index.mjs";
export async function bible_audio_chapter_screens_timed_screens_add(
  pieces,
  long_orders,
  least,
  room,
) {
  "Listens to the long lines of a chapter, then hands back the screens gathered so far together with the single function that adds one more line to them.";
  "★ A LINE IS CUT INTO SCREENS ONLY WHERE THE HEARING CAN BE TRUSTED, AND KEPT WHOLE EVERYWHERE ELSE. Cutting a line means placing its pieces by where the words were heard, so a hearing that found no words at all, or found them and is not sure of them, would place the pieces somewhere the reading never was. A line left whole is only too long; a line cut on a bad hearing is wrong.";
  arguments_assert(arguments, 4);
  let timed = await audio_pieces_words_timed(pieces);
  let screens = [];
  function screens_add(line, order) {
    let report = bible_audio_chapter_screens_timed_report(
      order,
      timed,
      long_orders,
    );
    if (equal(report, null)) {
      list_add(screens, line);
      return;
    }
    let words = property_get(report, "words");
    let confidence = property_get(report, "confidence");
    let heard = list_size_greater_than(words, 0);
    let trusted = heard && not(less_than(confidence, least));
    if (not(trusted)) {
      list_add(screens, line);
      return;
    }
    let seconds = property_get(report, "seconds");
    let start = property_get(line, "start");
    let end = property_get(line, "end");
    let cut = lyric_video_words_screens(words, room, seconds);
    let last = list_size_subtract(cut, 1);
    function screen_each(screen, at) {
      let right = property_get(screen, "start");
      let number = add(start, right);
      let from = equal(at, 0) ? start : number_hundredths_rounded(number);
      let right2 = property_get(screen, "end");
      let number3 = add(start, right2);
      let to = equal(at, last) ? end : number_hundredths_rounded(number3);
      let placed = {
        start: from,
        end: to,
        text: property_get(screen, "text"),
      };
      list_add(screens, placed);
    }
    each_index(cut, screen_each);
  }
  let r = {
    screens,
    screens_add,
  };
  return r;
}
