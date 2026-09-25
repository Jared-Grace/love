import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { less_than } from "./less_than.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_song_words_times_write(name, path_times) {
  arguments_assert(arguments, 2);
  ("$plain name");
  ("$plain path_times");
  ("Puts the given start and end of every word into a song's timing document, one list of words per line, and works each line's start and end out again from its words.");
  ("★ IT IS FOR TIMES WORKED OUT ELSEWHERE, SUCH AS FROM THE BEAT A SONG WAS RECORDED TO. Hearing places a word only roughly; a song sung to a metronome puts every syllable on the beat, so times read off the beat are better than any listening, and this is how they get in.");
  ("★ EVERY WORD MUST MATCH THE DOCUMENT'S WORD IN THE SAME PLACE, or it refuses. The times file is made apart from the document, and times laid on the wrong words would look finished and be wrong.");
  let folder = lyric_video_songs_folder();
  let path_document = path_join([folder, name + ".json"]);
  let document = await file_read_json(path_document);
  let times = await file_read_json(path_times);
  let lines = document.lines;
  let b = equal(times.length, lines.length);
  if (not(b)) {
    error(
      "there are " +
        lines.length +
        " lines and " +
        times.length +
        " timed lines",
    );
  }
  for (let index = 0; less_than(index, lines.length); index++) {
    let words = lines[index].words;
    let timed = times[index];
    let b2 = equal(timed.length, words.length);
    if (not(b2)) {
      error(
        "line " +
          (index + 1) +
          " has " +
          words.length +
          " words and " +
          timed.length +
          " timed words",
      );
    }
    for (let place = 0; less_than(place, words.length); place++) {
      let b3 = equal(timed[place].text, words[place].text);
      if (not(b3)) {
        error(
          "line " +
            (index + 1) +
            " word " +
            (place + 1) +
            " is " +
            words[place].text +
            " not " +
            timed[place].text,
        );
      }
      words[place].start = timed[place].start;
      words[place].end = timed[place].end;
    }
  }
  let starts = [];
  for (let line of lines) {
    starts.push(line.words[0].start);
  }
  let texts = list_map_property(lines, "text");
  let timed_lines = lyric_timing_lines_timed(starts, texts, document.duration);
  for (let index = 0; less_than(index, lines.length); index++) {
    lines[index].start = timed_lines[index].start;
    lines[index].end = timed_lines[index].end;
  }
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    lines: lines.length,
  };
  return r;
}
