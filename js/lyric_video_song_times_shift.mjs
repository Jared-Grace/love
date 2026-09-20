import { round } from "./round.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_song_times_shift(name, seconds) {
  "$plain name";
  "$plain seconds";
  "Moves every moment in a song's timing document later by the same amount, so a recording re-exported with a longer opening keeps the timing that was already worked out for it.";
  "★ IT MOVES THE WHOLE DOCUMENT AND NOT ONLY THE SINGING, BECAUSE THE PICTURES ARE TIMED AGAINST THE SAME CLOCK. A shift applied to the lines alone leaves every painting where it was, so each one now changes over a word instead of between two lines, and nothing reports it - the film still renders, and the fault is only visible by watching.";
  "★ IT IS THE ANSWER WHEN THE SINGING DID NOT CHANGE, AND HEARING THE SONG AGAIN IS THE ANSWER WHEN IT DID. Listening rebuilds every line from scratch, which throws away every word a person moved by hand, every word held longer than its note, and the snapping of the words onto the melody. None of that is recoverable, and none of it is wrong merely because silence was added in front of it. So a longer opening is a shift; a re-sung line is a hearing.";
  "★ A MOMENT OF EXACTLY ZERO STAYS AT ZERO, because it is not a moment in the song at all - it is the beginning of the film. Moved with everything else it opens the film on nothing, and the first picture arrives late for the rest of its life.";
  "★ THE AMOUNT IS READ AS A NUMBER BEFORE ANYTHING IS ADDED TO IT. A command line hands every argument over as text, and adding text to a number joins the two instead of adding them, so every moment in the document becomes a word rather than a time and the rounding afterwards turns each one into nothing at all. The document is then overwritten with a full set of unusable times and the command still reports success."; "The moments are rounded back to five figures after the shift, because adding two decimals in binary leaves a tail of noise that is far below a frame and still rewrites every number in the document into something nobody can read.";
  let seconds_number = Number(seconds); let folder = lyric_video_songs_folder();
  let file_name = text_combine(name, ".json");
  let path_document = path_join([folder, file_name]);
  let document = await file_read_json(path_document);
  function shifted(seconds_before) {
    if (equal(seconds_before, 0)) {
      let r3 = 0;
      return r3;
    }
    let moved_to = add(seconds_before, seconds_number);
    let n = multiply(moved_to, 100000);
    let top = round(n);
    let r = divide(top, 100000);
    return r;
  }
  let count_words = 0;
  for (let line of document.lines) {
    line.start = shifted(line.start);
    line.end = shifted(line.end);
    for (let word of line.words) {
      word.start = shifted(word.start);
      word.end = shifted(word.end);
      count_words = count_words + 1;
    }
  }
  for (let picture of document.pictures) {
    picture.start = shifted(picture.start);
    picture.end = shifted(picture.end);
  }
  document.duration = shifted(document.duration);
  await file_overwrite_json(path_document, document);
  let r2 = {
    name,
    seconds: seconds_number,
    lines: document.lines.length,
    words: count_words,
    pictures: document.pictures.length,
    duration: document.duration,
  };
  return r2;
}
