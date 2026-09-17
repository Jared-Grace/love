import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { file_read } from "./file_read.mjs";
import { ardour_session_tick_seconds } from "./ardour_session_tick_seconds.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { math_max } from "./math_max.mjs";
import { less_than } from "./less_than.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_song_word_move(
  name,
  line_index,
  word_index,
  quarters,
) {
  arguments_assert(arguments, 4);
  ("$plain name");
  ("$plain line_index");
  ("$plain word_index");
  ("$plain quarters");
  ("Moves where one word of a song begins by a length of note - a quarter, an eighth, a sixteenth, earlier or later - writes the song's timing document back, and answers the word as it now stands.");
  ("★ THE STEP IS A LENGTH OF NOTE AND NOT A LENGTH OF TIME, BECAUSE THE HUMAN ASKED FOR IT THAT WAY AND THE SONG IS WRITTEN THAT WAY. A word sung early or late is out by some part of a beat, and the beat is the song's own; a tenth of a second is nobody's unit and would leave the word between two notes. The quarter note's length is read off the tempo of the Ardour session the document already names, so the same press moves a word by the same amount of music in a fast song and a slow one.");
  ("★ ONLY WHERE THE WORD BEGINS IS MOVED, the same promise the melody snap makes. The end is pushed later only when it would otherwise come before the start, since a word cannot be over before it is sung.");
  ("★ HOW FAR THE WORD HAS BEEN MOVED BY HAND IS KEPT ON THE WORD, IN QUARTER NOTES. Snapping the words to the melody again starts from what the aligner heard and would put every word back on its nearest note, throwing these moves away without a word; the count is what lets whatever runs next see that a person placed this word and by how much.");
  ("A MOMENT BEFORE THE SONG BEGINS IS NOT ALLOWED. The first word moved earlier than the start stops at the start.");
  ("A document that names no Ardour session has no tempo to measure a note by, and is refused rather than guessed at.");
  let folder = lyric_video_songs_folder();
  let file_name = name + ".json";
  let path_document = path_join([folder, file_name]);
  let document = await file_read_json(path_document);
  let ardour = document.ardour;
  if (equal(ardour, undefined)) {
    error(
      "this song's document names no Ardour session, so there is no tempo to measure a note by: " +
        name,
    );
  }
  let text = await file_read(ardour.session);
  let tick_seconds = ardour_session_tick_seconds(text);
  let quarter_seconds = multiply(tick_seconds, 1920);
  let line = document.lines[line_index];
  let word = line.words[word_index];
  let seconds = multiply(quarters, quarter_seconds);
  let moved = add(word.start, seconds);
  let rounded = number_round_places(moved, 3);
  let start = math_max(rounded, 0);
  word.start = start;
  if (less_than(word.end, start)) {
    word.end = start;
  }
  let before = word.moved_quarters;
  let so_far = equal(before, undefined) ? 0 : before;
  word.moved_quarters = add(so_far, quarters);
  await file_overwrite_json(path_document, document);
  return word;
}
