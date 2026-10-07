import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { subtract } from "./subtract.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function lyric_video_document_pictures_times_derive(
  document,
  seconds_lead,
) {
  arguments_assert(arguments, 2);
  ("$plain document");
  ("$plain seconds_lead");
  ("Sets when each picture of a lyric video document comes up and goes away from the times of the lines it is pinned to, changing the document it is handed.");
  ("★ A PICTURE'S TIMES ARE A COPY OF ITS LINE'S TIME, SO EVERYTHING THAT RETIMES THE LINES HAS TO CALL THIS. Measured 2026-10-07 on Psalm 82: its pictures were timed while its lines still had no times, so every picture held null; the lines were then heard and written, the pictures were not, and the render died on a NaN. What a person authors is the line a picture is pinned to; the seconds follow from that and are only stored because the renderer reads them.");
  ("The first picture comes up at the very start and the last stays until the song ends, so there is never a gap with nothing behind the words. A picture whose line number does not name a line is left as it was - saying which pictures are unfinished is the writer's job, not this.");
  let lead = Number(seconds_lead);
  let lines = document.lines;
  let pictures = lyric_video_document_pictures(document);
  function line_start_led(picture) {
    let value = subtract(lines[picture.line].start, lead);
    let rounded = number_round_places(value, 3);
    return rounded;
  }
  function pinned_is(picture) {
    let numbered = equal(typeof picture.line, "number");
    let inside =
      numbered &&
      greater_than_equal(picture.line, 0) &&
      less_than(picture.line, lines.length);
    return inside;
  }
  let count = pictures.length;
  for (let index = 0; less_than(index, count); index += 1) {
    let picture = pictures[index];
    let b = pinned_is(picture);
    if (not(b)) {
      continue;
    }
    let first = equal(index, 0);
    picture.start = first ? 0 : line_start_led(picture);
    let after = index + 1;
    let last = equal(after, count);
    let end = document.duration;
    if (not(last)) {
      let picture_after = pictures[after];
      if (pinned_is(picture_after)) {
        end = line_start_led(picture_after);
      }
    }
    picture.end = end;
  }
  return document;
}
