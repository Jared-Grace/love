import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_songs } from "./app_music_songs.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_music_songs_show(parent) {
  "The page a person arrives at with no song named: a line saying what is here, and then one button a song.";
  "BUTTONS RATHER THAN A LIST OF LINKS, because on a phone this is the whole reason the page exists - somebody has finished a song and wants the words to it, and a thing the width of a thumb is the difference between that being one tap and being three.";
  arguments_assert(arguments, 1);
  let songs = app_music_songs();
  let heading = "The words of the songs, and what each line rests on.";
  html_p_text(parent, heading);
  for (let song of songs) {
    function lambda$go() {
      html_hash_name_reload(song.hash_name);
    }
    app_shared_button_wide(parent, song.title, lambda$go);
  }
}
