import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { lyric_timing_tapped } from "./lyric_timing_tapped.mjs";
import { lyric_timing_desk_load } from "./lyric_timing_desk_load.mjs";
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
  ("CHOOSING A CHAPTER LOADS IT. The passage row is handed the loading step and calls it the moment a chapter is settled on, so the words below the row are always the words the row is naming. Asking for a second press bought nothing and cost the one mistake this screen cannot show you: a whole song tapped against the psalm still on the cards and written into the psalm named above them.");
  ("The step is given to the row rather than the row reaching for it, so the row stays a row of buttons about which passage and knows nothing about fetching one.");
  let root = html_body_div();
  let asked =
    "Choose a song, then press the words on the big button as you hear them sung. Choosing a chapter loads it.";
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
  async function on_settled() {
    await lyric_timing_desk_load(desk);
  }
  desk.inputs = lyric_timing_screen_passage(root, on_settled);
  desk.song = lyric_timing_screen_song(root);
  desk.cards = lyric_timing_screen_cards(root, on_tap);
  desk.told = html_p_text(root, "");
  lyric_timing_screen_buttons_tapping(root, desk);
  lyric_timing_screen_buttons_writing(root, desk);
  return desk;
}
