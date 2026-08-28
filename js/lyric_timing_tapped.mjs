import { arguments_assert } from "./arguments_assert.mjs";
import { html_media_time } from "./html_media_time.mjs";
import { lyric_timing_held_tap } from "./lyric_timing_held_tap.mjs";
import { lyric_timing_cards_show } from "./lyric_timing_cards_show.mjs";
export function lyric_timing_tapped(desk) {
  arguments_assert(arguments, 1);
  ("$plain desk");
  ("What happens when somebody presses the button carrying the next line: the moment the song is at is written down against that line, and the screen moves on.");
  ("IT READS THE PLAYER RATHER THAN A CLOCK. What is wanted is where in the song the line begins, and a song can be paused, dragged, or listened to twice; a clock counting from when the page opened would answer a different question every time and only agree with the music on a first straight-through listen.");
  let seconds = html_media_time(desk.song.audio);
  lyric_timing_held_tap(desk.held, seconds);
  lyric_timing_cards_show(desk.cards, desk.held);
}
