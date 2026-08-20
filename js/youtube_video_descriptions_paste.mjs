import { json_to } from "./json_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_studio_signed_in_script } from "./youtube_studio_signed_in_script.mjs";
export function youtube_video_descriptions_paste(songs) {
  "A whole run of text to paste into a signed-in studio page: the helpers, the songs to be given words, and the one line that sets them going.";
  "It takes the songs rather than fetching them, because the same paste is wanted for one song as a first careful try and for two hundred as the work itself, and those two differ only in what list is handed in.";
  "The line that does the writing is last on purpose, so a paste that arrives cut short defines things and writes nothing, rather than writing with half the songs.";
  "The last line does not return until the person has saved one video by hand, because that save is what the run copies. So the paste says so before it starts waiting - a run that looks hung and a run that is waiting for you look the same from a console, and only one of them is your turn.";
  arguments_assert(arguments, 1);
  let script = youtube_studio_signed_in_script();
  let lines = [
    script,
    "window.psalm_videos = " + json_to(songs) + ";",
    "console.log('Now change one video description in studio by hand and press Save. That save is caught and copied, and the " +
      songs.length +
      " songs here follow it on their own.');",
    "await window.psalm_video_descriptions_apply();",
  ];
  let paste = lines.join("\n");
  return paste;
}
