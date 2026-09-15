import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { lyric_timing_tapped } from "./lyric_timing_tapped.mjs";
import { lyric_timing_desk_load } from "./lyric_timing_desk_load.mjs";
import { lyric_timing_song_chosen } from "./lyric_timing_song_chosen.mjs";
import { lyric_timing_screen_passage } from "./lyric_timing_screen_passage.mjs";
import { lyric_timing_screen_song } from "./lyric_timing_screen_song.mjs";
import { lyric_timing_held_select } from "./lyric_timing_held_select.mjs";
import { html_media_time_set } from "./html_media_time_set.mjs";
import { html_media_play } from "./html_media_play.mjs";
import { lyric_timing_cards_show } from "./lyric_timing_cards_show.mjs";
import { lyric_timing_held_nudge } from "./lyric_timing_held_nudge.mjs";
import { lyric_timing_screen_cards } from "./lyric_timing_screen_cards.mjs";
import { lyric_timing_screen_follow } from "./lyric_timing_screen_follow.mjs";
import { lyric_timing_screen_buttons_tapping } from "./lyric_timing_screen_buttons_tapping.mjs";
import { lyric_timing_screen_buttons_writing } from "./lyric_timing_screen_buttons_writing.mjs";
export async function lyric_timing_preview() {
  arguments_assert(arguments, 0);
  ("The screen for timing a song by hand, on the sandbox app at hash lyric_timing: play a song, press the words as you hear them, and write the times the video is rendered from.");
  ("WHERE EACH LINE BEGINS CAN ONLY BE HEARD, WHICH IS WHY A PERSON IS IN THE LOOP AT ALL. Everything else about a lyric video is already derivable - the words come off the shelf, the length comes off the file - and a first render can only spread the lines evenly across the song, which is always wrong and sometimes badly wrong. This is the one part no command can do, so it is given the least tiring shape there is: listen once, press once a line.");
  ("IT WRITES TO THE DISK OF THE MACHINE SERVING IT, which is what makes it worth having as a page here rather than anywhere else. The times go straight into the passage's document and the render runs from the same press, so nothing is copied out of a browser by hand - and the same page opened on a phone puts the tapping where the good speakers are.");
  ("The song is never uploaded. It is played out of the machine the page is being read on and looked up by name when the render needs a path, so a song being timed stays exactly where its owner already keeps it.");
  ("★ CHOOSING A SONG CHOOSES THE PASSAGE, BECAUSE THE SONG IS THE ONE THING THAT SAYS WHICH RECORDING IS BEING TIMED. A chapter pressed in the row above knows nothing about stanzas and nothing about second arrangements, so the screen used to open and write the plain whole chapter whatever was playing: an evening tapped along to a take landed on a different recording's document, and the stanzas of Psalm 119 could not be reached here at all. The machine can read both off the folder the song came from, so the press that picks the file is the press that settles the passage, and the row above moves to say so.");
  ("CHOOSING A CHAPTER LOADS IT. The passage row is handed the loading step and calls it the moment a chapter is settled on, so the words below the row are always the words the row is naming. Asking for a second press bought nothing and cost the one mistake this screen cannot show you: a whole song tapped against the psalm still on the cards and written into the psalm named above them.");
  ("AND SO DOES ARRIVING, for the same reason and against the same mistake. The row arrives naming the recording this device was last timing, and a passage named but not loaded is the identical trap one step earlier: the row says one psalm, the cards hold nothing, and the first thing anybody does about an empty screen is start pressing. Loading was the one press on this page that never carried a decision - it only ever caught the screen up with what it was already saying - which is the mark of a press that should not be asked for.");
  ("The document is held at nothing until something is loaded, so that the render button can tell an empty screen from a timed one instead of asking the disk about a name nobody has chosen.");
  ("The loading is asked for last, once every part of the screen it fills in exists. Anything earlier would be a fetch racing the boxes it is fetched into. The whole screen is already drawn by then, so what a person sees is the page arriving at once and the words appearing in it a moment later, which is the right way round: the song can be chosen while the passage is still coming.");
  ("The step is given to the row rather than the row reaching for it, so the row stays a row of buttons about which passage and knows nothing about fetching one.");
  let root = html_body_div();
  let asked =
    "Open a song file and the passage follows it. Press the words on the big button as you hear them sung. Press any line in the list to jump there, and use - and + to move its time.";
  html_p_text(root, asked);
  let desk = {
    held: {
      texts: [],
      starts: [],
      cursor: 0,
    },
    path_document: "",
  };
  function on_tap() {
    lyric_timing_tapped(desk);
  }
  async function on_settled() {
    await lyric_timing_desk_load(desk);
  }
  async function on_song(file_name) {
    await lyric_timing_song_chosen(desk, file_name);
  }
  desk.inputs = lyric_timing_screen_passage(root, on_settled);
  desk.song = lyric_timing_screen_song(root, on_song);
  function on_select(index) {
    desk.following = false;
    let moment = lyric_timing_held_select(desk.held, index);
    html_media_time_set(desk.song.audio, moment);
    html_media_play(desk.song.audio);
    lyric_timing_cards_show(desk.cards, desk.held);
  }
  function on_nudge(index, seconds) {
    lyric_timing_held_nudge(desk.held, index, seconds);
    lyric_timing_cards_show(desk.cards, desk.held);
  }
  desk.cards = lyric_timing_screen_cards(root, on_tap, on_select, on_nudge);
  lyric_timing_screen_follow(desk);
  desk.told = html_p_text(root, "");
  lyric_timing_screen_buttons_tapping(root, desk);
  lyric_timing_screen_buttons_writing(root, desk);
  await on_settled();
  return desk;
}
