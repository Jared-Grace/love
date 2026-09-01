import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_chunk_texts } from "./bible_audio_chunk_texts.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { audio_file_duration } from "./audio_file_duration.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { add } from "./add.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { divide } from "./divide.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function bible_audio_chapter_lines_timed(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "The lines of a recorded chapter with the second each one begins and the second it ends, measured off the sound files themselves.";
  "★ THESE TIMES ARE HEARD RATHER THAN GUESSED, WHICH IS THE WHOLE DIFFERENCE BETWEEN THIS AND A SONG. A song arrives as one file and nothing can tell where a sung line starts, so its lines are spread evenly and a person corrects them by ear. A spoken chapter was recorded one piece at a time into one file each, so the length of a piece is simply read off it and no ear and no correcting are wanted. The document that comes out is the same document either way, so the renderer never learns which kind it was given.";
  "★ EVERY LINE ENDS EXACTLY WHERE THE NEXT ONE BEGINS, BECAUSE ONE NUMBER IS SHARED RATHER THAN TWO BEING WORKED OUT. Rounding a start and an end apart leaves a hundredth of a second between them at nearly every join, and a subtitle asked to leave the screen a hundredth before its replacement arrives flickers to black once a line for the length of the chapter. So the joins are worked out once as a run of marks and each line is handed the mark before it and the mark after it.";
  "★ THE MARKS ARE ADDED UP UNROUNDED AND ROUNDED ONLY AS THEY ARE WRITTEN DOWN, so that a chapter of a hundred pieces does not drift half a second away from its own sound by the end. Rounding the running total each time would fold every piece's error into every mark after it.";
  arguments_assert(arguments, 2);
  let chunks = await bible_audio_chunk_texts(bible_folder, chapter_code);
  let folder = bible_audio_folder(bible_folder, chapter_code);
  async function chunk_seconds(chunk) {
    let n = property_get(chunk, "chunk");
    let v = String(n);
    let name = text_combine_multiple([v, ".mp3"]);
    let p = path_join([folder, name]);
    let seconds = await audio_file_duration(p);
    return seconds;
  }
  let durations = await list_map_async(chunks, chunk_seconds);
  let exact = 0;
  let marks = [0];
  function duration_each(seconds) {
    exact = add(exact, seconds);
    let hundredths = multiply_round(exact, 100);
    let mark = divide(hundredths, 100);
    list_add(marks, mark);
  }
  each(durations, duration_each);
  function line_each(chunk, index) {
    let timed = {
      start: marks[index],
      end: marks[index + 1],
      text: property_get(chunk, "text"),
    };
    return timed;
  }
  let lines = chunks.map(line_each);
  return lines;
}
