import { round } from "./round.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { audio_file_duration } from "./audio_file_duration.mjs";
import { bible_usfm_version_reference_text } from "./bible_usfm_version_reference_text.mjs";
import { bible_usfm_version_chapter_text } from "./bible_usfm_version_chapter_text.mjs";
import { text_split_new_line } from "./text_split_new_line.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_draft(
  version,
  book_code,
  chapter_number,
  path_audio,
  path_document,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "$plain path_audio";
  "$plain path_document";
  "Writes a first draft of the timing document a lyric video is made from: the passage in the translation asked for, one line at a time, with a start and an end for each one.";
  "The times it writes are a spread, not a hearing. Nothing here has listened to the song, so every line is given the same share of it. A person then corrects them by ear, which is a few minutes of nudging numbers rather than an hour of typing the psalm out and counting seconds; and the lines, the spelling, the reference line and the translation's name all arrive already right, because they were read out of the translation rather than remembered.";
  "The words of the passage decide where the lines break. A psalm is already written in lines in the file it is kept in, and those are the lines a singer sings, so they are also the lines to show.";
  "The song is left quiet at both ends. A song usually opens on a bar or two before anyone sings and closes on a chord after the last word, so the spread starts a little in and stops a little short rather than filling the whole length.";
  let duration = await audio_file_duration(path_audio);
  let reference = await bible_usfm_version_reference_text(
    version,
    book_code,
    chapter_number,
  );
  let text = await bible_usfm_version_chapter_text(
    version,
    book_code,
    chapter_number,
  );
  let split = text_split_new_line(text);
  function lambda(line) {
    let r = line.trim();
    return r;
  }
  let trimmed = split.map(lambda);
  function lambda2(line) {
    let neq = not_equal(line, "");
    return neq;
  }
  let texts = trimmed.filter(lambda2);
  let opening = 2;
  let closing = 4;
  let left = subtract(duration, opening);
  let sung = subtract(left, closing);
  let share = divide(sung, texts.length);
  function lambda3(line_text, index) {
    let start = opening + multiply(share, index);
    let end = start + share;
    let n = multiply(start, 100);
    let top = round(n);
    let n2 = multiply(end, 100);
    let top2 = round(n2);
    let r2 = {
      start: divide(top, 100),
      end: divide(top2, 100),
      text: line_text,
    };
    return r2;
  }
  let lines = texts.map(lambda3);
  let document = {
    reference: reference,
    duration: duration,
    width: 1080,
    height: 1920,
    font_size: 150,
    reference_font_size: 64,
    lines: lines,
  };
  await file_overwrite_json(path_document, document);
  return document;
}
