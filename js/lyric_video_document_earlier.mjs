import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { number_is } from "./number_is.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { divide } from "./divide.mjs";
import { object_merge_replace } from "./object_merge_replace.mjs";
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
  ("Every line keeps the moment it lets go as well as the moment it lands, so the whole document slides and nothing about how long each line is shown changes. Moving only the starts would stretch each line by the same amount it was moved, which is a second decision nobody asked for.");
  ("A LINE WITH NO TIME ON IT IS LEFT WITH NO TIME ON IT, AND THE FLOOR AT ZERO IS WHY IT HAD TO BE SAID. Taking a third of a second off nothing gives a third of a second below zero as far as arithmetic is concerned, and the floor then catches that and calls it the start of the song - so a line nobody had heard came out of a lag correction claiming to begin on the first note. A lag is a correction to a moment somebody reacted to, and a line nobody has tapped has no such moment to correct.");
  let seconds = number_from_text(seconds_text);
  let document_timed = await file_read_json(path_document);
  function time_earlier(time) {
    let known = number_is(time);
    let untimed = not(known);
    if (untimed) {
      return null;
    }
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
  let lines = document_timed.lines.map(line_earlier);
  object_merge_replace(document_timed, {
    lines,
  });
  await file_overwrite_json(path_document, document_timed);
  let r = {
    path_document,
    seconds,
    lines: lines.length,
    first_line_start: lines[0].start,
    last_line_start: lines[subtract(lines.length, 1)].start,
  };
  return r;
}
