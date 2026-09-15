import { arguments_assert } from "./arguments_assert.mjs";
import { html_media_time } from "./html_media_time.mjs";
import { lyric_timing_line_at_seconds } from "./lyric_timing_line_at_seconds.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { lyric_timing_cards_show } from "./lyric_timing_cards_show.mjs";
import { html_on } from "./html_on.mjs";
export function lyric_timing_screen_follow(desk) {
  arguments_assert(arguments, 1);
  ("$plain desk");
  ("Keeps the words on the screen in step with the song while it plays, for as long as nobody is tapping.");
  ("★ A SONG PLAYED OVER TIMES ALREADY RECORDED SHOULD SHOW ITS WORDS ARRIVING. Somebody who opens a timed song and presses play is checking the timing, and a screen that sits on line one while the singer is on line nine answers nothing - the only way to see it was to press Start from here over and over.");
  ("FOLLOWING STOPS THE MOMENT SOMEBODY TAPS, PICKS A LINE, OR STEPS BACK. Each of those says the next press is aimed at one particular line, and a song moving on past that line's old time would slide the button onto the line after it just before the thumb lands - so a slightly late tap would write over the wrong line. Pausing the song is the one gesture that says the tapping is over, so it is what turns following back on.");
  ("The screen is redrawn only when the line changes, not at every tick of the player, because a redraw rebuilds the whole list and puts the marked row back in the middle, which a person scrolling it would feel as the list snatching itself away four times a second.");
  ("★ WHAT IS BEING SUNG AND WHAT IS TAPPED NEXT ARE KEPT APART, AND ONLY THE FIRST FOLLOWS THE SONG EXACTLY. They used to be one number, so following the song moved the big button onto the next line the instant the old time of the line before it went by - which is the instant somebody retiming that line is about to press. The first Hallelujah of Psalm 150 was stored at nought, so pressing play slid the button past it before a note was sung, and the whole passage was tapped one line out.");
  ("THE BUTTON TRAILS THE SONG BY A SECOND. A tap for a line whose old time was nearly right lands a little either side of that time, and a second is room for any tap that is not badly late - while still keeping the button on the song for somebody who is only listening.");
  let audio = desk.song.audio;
  let trail = 1;
  desk.following = true;
  function on_time() {
    let seconds = html_media_time(audio);
    let heard = lyric_timing_line_at_seconds(desk.held.starts, seconds);
    let cursor = desk.held.cursor;
    if (desk.following) {
      let trailed = subtract(seconds, trail);
      cursor = lyric_timing_line_at_seconds(desk.held.starts, trailed);
    }
    let same_heard = equal(heard, desk.held.heard);
    let same_cursor = equal(cursor, desk.held.cursor);
    if (same_heard && same_cursor) {
      return;
    }
    desk.held.heard = heard;
    desk.held.cursor = cursor;
    lyric_timing_cards_show(desk.cards, desk.held);
  }
  function on_pause() {
    desk.following = true;
    on_time();
  }
  html_on(audio, "timeupdate", on_time);
  html_on(audio, "pause", on_pause);
}
