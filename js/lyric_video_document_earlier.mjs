import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { object_merge } from "./object_merge.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_earlier(
  path_document,
  seconds_text,
) {
  arguments_assert(arguments, 2);
  ("$plain path_document");
  ("$plain seconds_text");
  ("Moves every line of a timing document earlier by the same number of seconds, and writes it back over itself.");
  ("A PERSON TAPPING ALONG IS ALWAYS LATE, AND ALWAYS BY ABOUT THE SAME AMOUNT. Tapping is a reaction: the ear hears the line begin, and the hand arrives a fraction of a second afterwards. That lag is a property of the person, not of the song, so it lands on every line alike - which is why one number taken off the whole document repairs all of them, and why correcting the lines one at a time would be doing twenty times the work to reach the same place.");
  ("The words are asked to appear slightly before they are sung on purpose. A reader needs a moment to take a line in, so a card that lands exactly on the first note is already late for them; landing a little early is what makes the two feel simultaneous.");
  ("Nothing is allowed to move before the start of the song. A time below zero is not a time, and a first line tapped at the very beginning has no lag to take off it - it was never a reaction to anything.");
  let seconds = number_from_text(seconds_text);
  let document_before = await file_read_json(path_document);
  function time_earlier(time) {
    let moved = subtract(time, seconds);
    let held = less_than(moved, 0) ? 0 : moved;
    let hundredths = multiply_round(held, 100);
    let rounded = divide(hundredths, 100);
    return rounded;
  }
  function line_earlier(line) {
    let moved_line = {
      start: time_earlier(line.start),
      end: time_earlier(line.end),
      text: line.text,
    };
    return moved_line;
  }
  let lines = document_before.lines.map(line_earlier);
  let document_after = object_merge(document_before, {
    lines,
  });
  await file_overwrite_json(path_document, document_after);
  let r = {
    path_document,
    seconds,
    lines: lines.length,
    first_start: lines[0].start,
  };
  return r;
}
