import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { not } from "./not.mjs";
import { app_shared_api_named_minutes } from "./app_shared_api_named_minutes.mjs";
export async function lyric_timing_rendered(asked, file_name, path_document) {
  arguments_assert(arguments, 3);
  ("$plain asked");
  ("$plain file_name");
  ("$plain path_document");
  ("Renders the video for the recording just timed, from the song of this name sitting in the downloads folder and the document the times were written into, and says what happened in a sentence a person can read.");
  ("THE SONG IS FOUND BY ITS NAME BECAUSE THE PAGE WAS NEVER TOLD ITS PLACE. A browser hands over a file's contents and withholds where it came from, so a page that has spent ten minutes playing a song still cannot name the path a renderer needs. Looking the name up in the one folder songs arrive in closes that from the other side.");
  ("★ THE DOCUMENT IS THE ONE THAT WAS OPENED, PASSED IN RATHER THAN SPELLED AGAIN. This used to hand a chapter to a command that works out the plain whole-chapter address from it, so every render from this screen made the video of the plain recording - whatever song was playing and whatever document the times had just gone into. The screen already knows which file it opened; using that is the only way the video and the times can be of the same singing.");
  ("★ AND THE MARK GOES WITH IT, BECAUSE IT IS WHAT THE VIDEO IS CALLED. Two arrangements of one psalm write two videos into one folder, and without the mark the second would be written over the first under a single name - which is exactly the loss that made every recording addressable in the first place.");
  ("A song that is not there is reported as not there rather than rendered from nothing. The alternative is a command that reads a path which does not exist and fails somewhere deep inside ffmpeg, which is a true message about the wrong thing.");
  ("Nothing is drafted here. A render that quietly wrote an even spread when it found no document would turn this button into two different buttons told apart only by watching what came out, and the drafting commands already exist and already refuse to write over anybody's corrected times.");
  ("THE TWO ASKINGS ARE NOT THE SAME KIND OF ASKING. Finding the song is a lookup and is over in a moment; rendering the video is minutes of ffmpeg. Asked the ordinary way the render could never finish at all - it was cut off at eight seconds, started again, cut off, started again, and reported as three connections aborted for no reason, which is a true message about the wrong thing again. So the render is asked with a ceiling that fits it and asked only once.");
  ("A video already newer than everything it is made from is left alone and said to be left alone. Rendering it again would spend minutes arriving at the file that is already there, and a button that said nothing in that case would look exactly like a button that had not heard the press.");
  let unloaded = text_empty_is(path_document);
  if (unloaded) {
    let nothing = "No passage is loaded yet, so there is nothing to render.";
    return nothing;
  }
  let f_name = fn_name("song_path_downloads");
  let song = await app_shared_api_named(f_name, [file_name]);
  let missing = not(song.found);
  if (missing) {
    let unfound = "No song of that name in the downloads folder: " + file_name;
    return unfound;
  }
  let f_name2 = fn_name("lyric_video_song_video_stale_write");
  let written = await app_shared_api_named_minutes(f_name2, [
    asked.version,
    song.path_audio,
    path_document,
    asked.mark,
  ]);
  if (not(written.wrote)) {
    let kept =
      "Kept " +
      written.path_output +
      " - it is already newer than the song, the times and the pictures.";
    return kept;
  }
  let said = "Wrote " + written.path_output;
  return said;
}
