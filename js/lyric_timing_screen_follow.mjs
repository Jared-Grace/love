import { arguments_assert } from "./arguments_assert.mjs";
import { html_media_time } from "./html_media_time.mjs";
import { lyric_timing_line_at_seconds } from "./lyric_timing_line_at_seconds.mjs";
import { equal } from "./equal.mjs";
import { lyric_timing_cards_show } from "./lyric_timing_cards_show.mjs";
import { html_on } from "./html_on.mjs";
export function lyric_timing_screen_follow(desk) {
  arguments_assert(arguments, 1);
  ("$plain desk");
  ("Keeps the line marked as being sung in step with the song while it plays.");
  ("★ A SONG PLAYED OVER TIMES ALREADY RECORDED SHOULD SHOW ITS WORDS ARRIVING. Somebody who opens a timed song and presses play is checking the timing, and a screen that sits on line one while the singer is on line nine answers nothing.");
  ("★ THE SONG NEVER MOVES THE BUTTON - ONLY A PERSON DOES. Following once moved the next line to tap as well, reckoned from the old times. But the old times are exactly what is being corrected: wherever they are wrong, the button slid onto another line just before the thumb landed, and every tap after that was written over the line after the one being sung. Retiming the end of Psalm 150 take 3 this way left every line from the first edit onwards at a wrong time. So the button moves only on a tap, on pressing a line, on Back one line, on Start from here, and on loading.");
  ("The screen is redrawn only when the line changes, not at every tick of the player, because a redraw rebuilds the whole list and puts the marked row back in the middle, which a person scrolling it would feel as the list snatching itself away four times a second.");
  let audio = desk.song.audio;
  function on_time() {
    let seconds = html_media_time(audio);
    let heard = lyric_timing_line_at_seconds(desk.held.starts, seconds);
    if (equal(heard, desk.held.heard)) {
      return;
    }
    desk.held.heard = heard;
    lyric_timing_cards_show(desk.cards, desk.held);
  }
  html_on(audio, "timeupdate", on_time);
}
