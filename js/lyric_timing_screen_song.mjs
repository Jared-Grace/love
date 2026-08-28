import { arguments_assert } from "./arguments_assert.mjs";
import { html_audio_controls } from "./html_audio_controls.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { html_input_file_audio } from "./html_input_file_audio.mjs";
export function lyric_timing_screen_song(parent) {
  arguments_assert(arguments, 1);
  ("$plain parent");
  ("The player and the box for choosing a song, with the name of whatever was chosen kept where the rest of the screen can ask for it.");
  ("THE NAME IS KEPT BECAUSE THE FILE ITSELF CANNOT BE HANDED ON. What the browser gives a page is the contents of a song and nothing about where it sits on the disk, and rendering a video needs the place, not the contents. The name is the only part of the choice that survives being passed to a command, so it is the part worth holding.");
  ("The player is put on the screen above the picker on purpose. It is what a person looks at for the whole sitting, and the picker is touched once at the start and never again.");
  let audio = html_audio_controls(parent);
  let song = {
    audio,
    file_name: "",
  };
  function on_file(file) {
    html_media_source_file_set(audio, file);
    song.file_name = file.name;
  }
  html_input_file_audio(parent, on_file);
  return song;
}
