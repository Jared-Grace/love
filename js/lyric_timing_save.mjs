import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { bible_usfm_version_passage_text } from "./bible_usfm_version_passage_text.mjs";
import { bible_usfm_version_credit_text } from "./bible_usfm_version_credit_text.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_timing_save(
  version,
  book_code,
  chapter_number,
  duration,
  lines,
) {
  arguments_assert(arguments, 5);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain duration");
  ("$plain lines");
  ("Writes the times somebody has just tapped into the passage's timing document, and hands back where it wrote them.");
  ("THE LETTERING SIZES ARE CARRIED OVER FROM WHATEVER IS ALREADY THERE, never re-decided here. Somebody who has made the words bigger has made a judgment about the video, and a save of the times is not a place to overrule it; only where there is no document yet do the sizes come from the defaults, because then there is no judgment to keep.");
  ("The passage and the translation's name are read from the shelf rather than taken from the screen. They are facts about the translation, not about the timing, and a screen that had been left open across a rename would otherwise write yesterday's wording back over today's.");
  let path_document = lyric_video_bible_document_path(
    version,
    book_code,
    chapter_number,
  );
  let existing = await file_exists(path_document);
  let sizes = existing
    ? await file_read_json(path_document)
    : {
        width: 1080,
        height: 1920,
        font_size: 150,
        passage_font_size: 96,
        credit_font_size: 64,
      };
  let passage = await bible_usfm_version_passage_text(
    version,
    book_code,
    chapter_number,
  );
  let credit = bible_usfm_version_credit_text(version);
  let document_timed = {
    passage,
    credit,
    duration,
    width: sizes.width,
    height: sizes.height,
    font_size: sizes.font_size,
    passage_font_size: sizes.passage_font_size,
    credit_font_size: sizes.credit_font_size,
    lines,
  };
  await file_overwrite_json(path_document, document_timed);
  let r = {
    path_document,
    lines: lines.length,
  };
  return r;
}
