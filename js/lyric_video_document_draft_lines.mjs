import { arguments_assert } from "./arguments_assert.mjs";
import { audio_file_duration } from "./audio_file_duration.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { lyric_video_document } from "./lyric_video_document.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_draft_lines(
  passage,
  credit,
  texts,
  path_audio,
  path_document,
) {
  arguments_assert(arguments, 5);
  ("$plain passage");
  ("$plain credit");
  ("$plain texts");
  ("$plain path_audio");
  ("$plain path_document");
  ("Writes a first draft of the timing document a lyric video is made from, given the lines already read out of a translation: every line gets an equal share of the song.");
  ("The times it writes are a spread, not a hearing. Nothing here has listened to the song, so every line is given the same share of it. A person then corrects them by ear, which is a few minutes of nudging numbers rather than an hour of typing the psalm out and counting seconds; and the lines, the spelling, the passage, the translation's name and its terms all arrive already right, because they were read out of the translation rather than remembered.");
  ("The song is left quiet at both ends. A song usually opens on a bar or two before anyone sings and closes on a chord after the last word, so the spread starts a little in and stops a little short rather than filling the whole length.");
  ("★ WHICH WORDS THESE ARE IS SETTLED BEFORE THIS IS ASKED, AND THAT IS WHAT LETS ONE SPREAD SERVE A WHOLE CHAPTER AND A STANZA ALIKE. A chapter is found by its number and a stanza by a number and two verse ends, which is a real difference and the only one; the spread itself cannot tell them apart and should not have to. Two copies of it would drift in the quiet seconds at either end, and a drift there is only ever seen by somebody watching the video.");
  let duration = await audio_file_duration(path_audio);
  let opening = 2;
  let closing = 4;
  let left = subtract(duration, opening);
  let sung = subtract(left, closing);
  let share = divide(sung, texts.length);
  function line_timed(line_text, index) {
    let start = opening + multiply(share, index);
    let end = start + share;
    let top = multiply_round(start, 100);
    let top2 = multiply_round(end, 100);
    let timed = {
      start: divide(top, 100),
      end: divide(top2, 100),
      text: line_text,
    };
    return timed;
  }
  let lines = texts.map(line_timed);
  let document = lyric_video_document(passage, credit, duration, lines);
  await file_overwrite_json(path_document, document);
  return document;
}
