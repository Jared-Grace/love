import { round } from "./round.mjs";
import { abs } from "./abs.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_hearings_path } from "./lyric_video_hearings_path.mjs";
import { property_get } from "./property_get.mjs";
import { number_is } from "./number_is.mjs";
export async function lyric_video_document_listen_spots(
  path_document,
  name_document,
  seconds,
) {
  arguments_assert(arguments, 3);
  ("$plain path_document");
  ("$plain name_document");
  ("$plain seconds");
  ("The few moments in a song worth a person's ear before it goes out: every line where the two readings of the recording placed it at least the given number of seconds apart, with the words, when the video now shows them, and where each reading put them.");
  ("★ IT EXISTS SO A REVIEW IS A HANDFUL OF SPOTS AND NOT A WHOLE SONG. Where the two readings agree, either one is near enough; where they disagree, one of them is wrong and only listening says which. Measured 2026-10-08 on Psalm 150, song 4: every line a person heard as late was among these, and the gap was what marked them.");
  ("A line one reading did not place at all is listed too, because there is nothing to compare it with, and that is a reason to listen rather than a reason to skip it.");
  let limit = Number(seconds);
  let document = await file_read_json(path_document);
  let file_path = lyric_video_hearings_path();
  let hearings = await file_read_json(file_path);
  let hearing = property_get(hearings, name_document);
  let spots = [];
  function lambda(line, index) {
    let aligner = hearing.starts[index];
    let heard = hearing.starts_heard[index];
    let both = number_is(aligner) && number_is(heard);
    let n = subtract(aligner, heard);
    let left = abs(n);
    let n2 = multiply(left, 100);
    let top = round(n2);
    let gap = both ? divide(top, 100) : null;
    if (both && less_than(gap, limit)) {
      return;
    }
    let n3 = multiply(aligner, 100);
    let top2 = round(n3);
    let n4 = multiply(heard, 100);
    let top3 = round(n4);
    spots.push({
      line: index,
      text: line.text,
      shown_at: line.start,
      aligner: number_is(aligner) ? divide(top2, 100) : null,
      hearer: number_is(heard) ? divide(top3, 100) : null,
      gap,
    });
  }
  document.lines.forEach(lambda);
  return spots;
}
