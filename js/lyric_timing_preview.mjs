import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { lyric_timing_tapped } from "./lyric_timing_tapped.mjs";
import { lyric_timing_screen_passage } from "./lyric_timing_screen_passage.mjs";
import { lyric_timing_screen_song } from "./lyric_timing_screen_song.mjs";
import { lyric_timing_screen_cards } from "./lyric_timing_screen_cards.mjs";
import { lyric_timing_screen_buttons_tapping } from "./lyric_timing_screen_buttons_tapping.mjs";
import { lyric_timing_screen_buttons_writing } from "./lyric_timing_screen_buttons_writing.mjs";
export function lyric_timing_preview() {
  arguments_assert(arguments, 0);
  ("The screen for timing a song by hand, on the sandbox app at hash lyric_timing: play a song, press the words as you hear them, and write the times the video is rendered from.");
  ("WHERE EACH LINE BEGINS CAN ONLY BE HEARD, WHICH IS WHY A PERSON IS IN THE LOOP AT ALL. Everything else about a lyric video is already derivable - the words come off the shelf, the length comes off the file - and a first render can only spread the lines evenly across the song, which is always wrong and sometimes badly wrong. This is the one part no command can do, so it is given the least tiring shape there is: listen once, press once a line.");
  ("IT WRITES TO THE DISK OF THE MACHINE SERVING IT, which is what makes it worth having as a page here rather than anywhere else. The times go straight into the passage's document and the render runs from the same press, so nothing is copied out of a browser by hand - and the same page opened on a phone puts the tapping where the good speakers are.");
  ("The song is never uploaded. It is played out of the machine the page is being read on and looked up by name when the render needs a path, so a song being timed stays exactly where its owner already keeps it.");
  let root = html_body_div();
  let asked =
    "Choose a song, load the passage, then press the words on the big button as you hear them sung.";
  html_p_text(root, asked);
  let desk = {
    held: {
      texts: [],
      starts: [],
      cursor: 0,
    },
  };
  function on_tap() {
    lyric_timing_tapped(desk);
  }
  desk.inputs = lyric_timing_screen_passage(root);
  desk.song = lyric_timing_screen_song(root);
  desk.cards = lyric_timing_screen_cards(root, on_tap);
  desk.told = html_p_text(root, "");
  lyric_timing_screen_buttons_tapping(root, desk);
  lyric_timing_screen_buttons_writing(root, desk);
  return desk;
}
