import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { not } from "./not.mjs";
import { app_shared_api_named_minutes } from "./app_shared_api_named_minutes.mjs";
export async function lyric_timing_rendered(asked, file_name) {
  "$plain asked";
  "$plain file_name";
  "Renders the video for the passage just timed, from the song of this name sitting in the downloads folder, and says what happened in a sentence a person can read.";
  "THE SONG IS FOUND BY ITS NAME BECAUSE THE PAGE WAS NEVER TOLD ITS PLACE. A browser hands over a file's contents and withholds where it came from, so a page that has spent ten minutes playing a song still cannot name the path a renderer needs. Looking the name up in the one folder songs arrive in closes that from the other side.";
  "A song that is not there is reported as not there rather than rendered from nothing. The alternative is a command that reads a path which does not exist and fails somewhere deep inside ffmpeg, which is a true message about the wrong thing.";
  "THE TWO ASKINGS ARE NOT THE SAME KIND OF ASKING. Finding the song is a lookup and is over in a moment; rendering the video is minutes of ffmpeg. Asked the ordinary way the render could never finish at all - it was cut off at eight seconds, started again, cut off, started again, and reported as three connections aborted for no reason, which is a true message about the wrong thing again. So the render is asked with a ceiling that fits it and asked only once.";
  let f_name = fn_name("song_path_downloads");
  let song = await app_shared_api_named(f_name, [file_name]);
  let missing = not(song.found);
  if (missing) {
    let unfound = "No song of that name in the downloads folder: " + file_name;
    return unfound;
  }
  let f_name2 = fn_name("lyric_video_bible_write");
  let written = await app_shared_api_named_minutes(f_name2, [
    asked.version,
    asked.book_code,
    asked.chapter_number,
    song.path_audio,
  ]);
  let said = "Wrote " + written.path_output;
  return said;
}
