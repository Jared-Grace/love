import { app_shared_button_wide_link_hash_name } from "./app_shared_button_wide_link_hash_name.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_songs } from "./app_music_songs.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_music_songs_show(parent) {
  "The page a person arrives at with no song named: a line saying what is here, and then one button a song.";
  "THE WIDTH OF A THUMB, because on a phone this is the whole reason the page exists - somebody has finished a song and wants the words to it, and a wide card is the difference between that being one tap and being three.";
  "and a real LINK underneath the card, which is a separate question from how big it is. A song is the thing on this page most likely to be handed to somebody, and until the address was on the card there was no way to hand it: a browser offers to copy where something goes, or to open it in a new tab, only when the thing pressed really is a link. It reads as a card and it IS a link, and neither costs the other anything.";
  arguments_assert(arguments, 1);
  let songs = app_music_songs();
  let heading = "The words of the songs, and what each line rests on.";
  html_p_text(parent, heading);
  for (let song of songs) {
    let button = app_shared_button_wide_link_hash_name(
      parent,
      song.hash_name,
      song.title,
    );
    ("each song stands off from the one above it by the gap this app spaces stacked buttons by, which is the same gap the buttons on a song's own page keep - so a reader moving between the two pages meets one rhythm rather than two. Left touching, several songs read as one block to choose within rather than as several things to choose between.");
    app_shared_button_gap_above(button);
  }
}
