import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { bible_usfm_version_passage_text } from "./bible_usfm_version_passage_text.mjs";
import { bible_usfm_version_credit_text } from "./bible_usfm_version_credit_text.mjs";
import { lyric_video_lines_text } from "./lyric_video_lines_text.mjs";
export async function lyric_timing_open(version, book_code, chapter_number) {
  arguments_assert(arguments, 3);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("Everything the timing screen needs to start on one passage: where its document lives, what the passage and translation are called, and the lines with whatever times have already been recorded for them.");
  ("TIMES ALREADY RECORDED ARE HANDED BACK RATHER THAN CLEARED, because the ordinary second visit is a repair and not a fresh start. Somebody times twenty lines, watches the video, finds two of them late, and comes back for those two. Starting them at nothing would make the cheap fix as expensive as the first pass.");
  ("Where there is no document yet, the lines come from the translation with no times on them at all, and a line with no time is left saying so. Filling it with a guess would be indistinguishable, on the screen, from a line somebody had actually heard.");
  let path_document = lyric_video_bible_document_path(
    version,
    book_code,
    chapter_number,
  );
  let existing = await file_exists(path_document);
  if (existing) {
    let document_kept = await file_read_json(path_document);
    let opened = {
      path_document,
      passage: document_kept.passage,
      credit: document_kept.credit,
      lines: document_kept.lines,
      existing,
    };
    return opened;
  }
  let passage = await bible_usfm_version_passage_text(
    version,
    book_code,
    chapter_number,
  );
  let credit = bible_usfm_version_credit_text(version);
  let texts = await lyric_video_lines_text(version, book_code, chapter_number);
  function line_untimed(line_text) {
    let untimed = {
      start: null,
      end: null,
      text: line_text,
    };
    return untimed;
  }
  let lines = texts.map(line_untimed);
  let fresh = {
    path_document,
    passage,
    credit,
    lines,
    existing,
  };
  return fresh;
}
