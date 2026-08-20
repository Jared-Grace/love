import { json_to } from "./json_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_studio_signed_in_script } from "./youtube_studio_signed_in_script.mjs";
export function youtube_video_descriptions_paste(songs) {
  "A whole run of text to paste into a signed-in studio page: the helpers, the songs to be given words, and the one line that sets them going.";
  "It takes the songs rather than fetching them, because the same paste is wanted for one song as a first careful try and for two hundred as the work itself, and those two differ only in what list is handed in.";
  "The line that does the writing is last on purpose, so a paste that arrives cut short defines things and writes nothing, rather than writing with half the songs.";
  arguments_assert(arguments, 1);
  let script = youtube_studio_signed_in_script();
  let lines = [
    script,
    "window.psalm_videos = " + json_to(songs) + ";",
    "await window.psalm_video_descriptions_apply();",
  ];
  let paste = lines.join("\n");
  return paste;
}
