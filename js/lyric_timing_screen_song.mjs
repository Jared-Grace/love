import { arguments_assert } from "./arguments_assert.mjs";
import { html_audio_controls } from "./html_audio_controls.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { html_input_file_audio } from "./html_input_file_audio.mjs";
export function lyric_timing_screen_song(parent, on_chosen) {
  arguments_assert(arguments, 2);
  ("$plain parent");
  ("$plain on_chosen");
  ("The player and the box for choosing a song, with the name of whatever was chosen kept where the rest of the screen can ask for it.");
  ("THE NAME IS KEPT BECAUSE THE FILE ITSELF CANNOT BE HANDED ON. What the browser gives a page is the contents of a song and nothing about where it sits on the disk, and rendering a video needs the place, not the contents. The name is the only part of the choice that survives being passed to a command, so it is the part worth holding.");
  ("★ CHOOSING A SONG IS TOLD TO WHOEVER ASKED, BECAUSE THE SONG IS WHAT SAYS WHICH RECORDING IS BEING TIMED. A person picking the second arrangement of a psalm, or the Qoph stanza of Psalm 119, has already answered that question; the screen used to keep only the name and go on addressing whatever the row at the top said, which was the plain whole chapter every time. The press that settles it is the press that meant it, and it lands here.");
  ("The name is set before anyone is told, so that whatever is told can ask for it and get the song that was just chosen rather than the one before.");
  ("The player is put on the screen above the picker on purpose. It is what a person looks at for the whole sitting, and the picker is touched once at the start and never again.");
  let audio = html_audio_controls(parent);
  let song = {
    audio,
    file_name: "",
  };
  async function on_file(file) {
    html_media_source_file_set(audio, file);
    song.file_name = file.name;
    await on_chosen(file.name);
  }
  html_input_file_audio(parent, on_file);
  return song;
}
