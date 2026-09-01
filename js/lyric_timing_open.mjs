import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { number_is } from "./number_is.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { bible_usfm_version_passage_text } from "./bible_usfm_version_passage_text.mjs";
import { bible_usfm_version_credit_text } from "./bible_usfm_version_credit_text.mjs";
import { lyric_video_lines_text } from "./lyric_video_lines_text.mjs";
export async function lyric_timing_open(version, book_code, chapter_number) {
  arguments_assert(arguments, 3);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("Everything the timing screen needs to start on one passage: where its document lives, what the passage and translation are called, and the lines with whatever moments have already been tapped for them.");
  ("TIMES ALREADY RECORDED ARE HANDED BACK RATHER THAN CLEARED, because the ordinary second visit is a repair and not a fresh start. Somebody times twenty lines, watches the video, finds two of them late, and comes back for those two. Starting them at nothing would make the cheap fix as expensive as the first pass.");
  ("WHAT COMES BACK IS THE MOMENT THE HAND PRESSED, NOT THE MOMENT THE FINISHED VIDEO USES. The two differ by the tap lag, and the lag is taken off again by every save. Handing back the corrected moment therefore moved the whole passage earlier a second time on the second visit, a third time on the third, and so on - so the eighteen lines somebody did not come back to fix drifted further from the music on every visit made to fix the other two. It was silent, it looked exactly like the times being kept as promised, and the further it went the more it looked like the lag being wrong rather than being applied twice.");
  ("So a line hands back what it was tapped at where the document remembers that, and the screen shows those moments too. That is the coherent reading of this room: the person taps what they hear, the box at the top says how late they are, and the correction happens once, on the way out.");
  ("A DOCUMENT WRITTEN BEFORE THE TAPPED MOMENT WAS KEPT HAS ONLY THE CORRECTED ONE, and it is handed back as before rather than guessed at. Adding the lag back on would need the lag, which such a document does not record either, so the guess would be the same constant twice over. Those passages shift once more on their next sitting and are then written with the tapped moments kept, after which they behave like the rest; saying so here is cheaper than a repair that could only be approximate.");
  ("Where there is no document yet, the lines come from the translation with no times on them at all, and a line with no time is left saying so. Filling it with a guess would be indistinguishable, on the screen, from a line somebody had actually heard.");
  let path_document = lyric_video_bible_document_path(
    version,
    book_code,
    chapter_number,
  );
  let existing = await file_exists(path_document);
  function line_tapped(line) {
    let kept_start = number_is(line.start_tapped);
    let kept_end = number_is(line.end_tapped);
    let line_hand = {
      start: kept_start ? line.start_tapped : line.start,
      end: kept_end ? line.end_tapped : line.end,
      text: line.text,
    };
    return line_hand;
  }
  if (existing) {
    let document_kept = await file_read_json(path_document);
    let lines_tapped = document_kept.lines.map(line_tapped);
    let opened = {
      path_document,
      passage: document_kept.passage,
      credit: document_kept.credit,
      lines: lines_tapped,
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
