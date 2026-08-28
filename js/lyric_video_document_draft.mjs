import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { audio_file_duration } from "./audio_file_duration.mjs";
import { bible_usfm_version_passage_text } from "./bible_usfm_version_passage_text.mjs";
import { bible_usfm_version_credit_text } from "./bible_usfm_version_credit_text.mjs";
import { bible_usfm_version_chapter_text } from "./bible_usfm_version_chapter_text.mjs";
import { text_split_new_line } from "./text_split_new_line.mjs";
import { multiply_round } from "./multiply_round.mjs";
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
  "The times it writes are a spread, not a hearing. Nothing here has listened to the song, so every line is given the same share of it. A person then corrects them by ear, which is a few minutes of nudging numbers rather than an hour of typing the psalm out and counting seconds; and the lines, the spelling, the passage, the translation's name and its terms all arrive already right, because they were read out of the translation rather than remembered.";
  "The words of the passage decide where the lines break. A psalm is already written in lines in the file it is kept in, and those are the lines a singer sings, so they are also the lines to show.";
  "The song is left quiet at both ends. A song usually opens on a bar or two before anyone sings and closes on a chord after the last word, so the spread starts a little in and stops a little short rather than filling the whole length.";
  "The three lettering sizes are written out rather than left to the renderer, because a person changing one of them is the commonest thing to want next and a number in the document is the shortest way to change it.";
  let duration = await audio_file_duration(path_audio);
  let passage = await bible_usfm_version_passage_text(
    version,
    book_code,
    chapter_number,
  );
  let credit = bible_usfm_version_credit_text(version);
  let text = await bible_usfm_version_chapter_text(
    version,
    book_code,
    chapter_number,
  );
  let split = text_split_new_line(text);
  function line_trimmed(line) {
    let bare = line.trim();
    return bare;
  }
  let trimmed = split.map(line_trimmed);
  function line_said(line) {
    let said = not_equal(line, "");
    return said;
  }
  let texts = trimmed.filter(line_said);
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
  let document = {
    passage: passage,
    credit: credit,
    duration: duration,
    width: 1080,
    height: 1920,
    font_size: 150,
    passage_font_size: 96,
    credit_font_size: 56,
    lines: lines,
  };
  await file_overwrite_json(path_document, document);
  return document;
}
