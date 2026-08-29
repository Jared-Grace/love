import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_timing_desk_load } from "./lyric_timing_desk_load.mjs";
import { lyric_timing_held_back } from "./lyric_timing_held_back.mjs";
import { number_is } from "./number_is.mjs";
import { html_media_time_set } from "./html_media_time_set.mjs";
import { lyric_timing_cards_show } from "./lyric_timing_cards_show.mjs";
import { html_media_time } from "./html_media_time.mjs";
import { lyric_timing_line_at_seconds } from "./lyric_timing_line_at_seconds.mjs";
import { html_button } from "./html_button.mjs";
export function lyric_timing_screen_buttons_tapping(parent, desk) {
  arguments_assert(arguments, 2);
  ("$plain parent");
  ("$plain desk");
  ("The three buttons that work the tapping: fetch the passage again, step back a line, and pick up wherever the player has been dragged to.");
  ("STEPPING BACK MOVES THE SONG BACK TOO. Somebody stepping back is asking to hear a line again, not to look at it, and leaving the music running on while the words jump backwards puts the two out of step at exactly the moment they were trying to line them up.");
  ("Starting from wherever the player sits is the whole of how a second visit is cheap. Twenty lines are timed, two are late, and this turns fixing those two into dragging the bar and pressing once instead of tapping through eighteen lines that were already right.");
  ("THE FIRST BUTTON IS NOW ONLY EVER A SECOND FETCH, and it used to be the first one as well. Arriving at the screen loads the passage it is naming, and choosing a chapter loads that, so there is no longer any way of standing in front of this page with a passage named and nothing behind it. What is left for the button is the case no arrival covers: a document written since it was loaded - by a render, or by this page in another window - which is fetched from here rather than by reopening the screen.");
  async function on_load() {
    await lyric_timing_desk_load(desk);
  }
  function on_back() {
    let start = lyric_timing_held_back(desk.held);
    let known = number_is(start);
    if (known) {
      html_media_time_set(desk.song.audio, start);
    }
    lyric_timing_cards_show(desk.cards, desk.held);
  }
  function on_here() {
    let seconds = html_media_time(desk.song.audio);
    desk.held.cursor = lyric_timing_line_at_seconds(desk.held.starts, seconds);
    lyric_timing_cards_show(desk.cards, desk.held);
  }
  html_button(parent, "Load the passage again", on_load);
  html_button(parent, "Back one line", on_back);
  html_button(parent, "Start from here", on_here);
}
