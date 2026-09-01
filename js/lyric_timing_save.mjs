import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { bible_usfm_version_passage_text } from "./bible_usfm_version_passage_text.mjs";
import { bible_usfm_version_credit_text } from "./bible_usfm_version_credit_text.mjs";
import { song_identity } from "./song_identity.mjs";
import { object_merge_replace } from "./object_merge_replace.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_timing_save(
  version,
  book_code,
  chapter_number,
  duration,
  lines,
  file_name,
) {
  arguments_assert(arguments, 6);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain duration");
  ("$plain lines");
  ("$plain file_name");
  ("Writes the times somebody has just tapped into the passage's timing document, alongside which recording they tapped along to, and hands back where it wrote them.");
  ("WHATEVER WAS ALREADY IN THE DOCUMENT IS KEPT, AND ONLY WHAT WAS JUST HEARD IS WRITTEN OVER. This used to name the handful of fields it carried across, which was the same thing for exactly as long as the document held nothing else - and the moment it held one more, saving the times would have thrown that away without a word. Somebody who has made the words bigger, or chosen what is shown behind them, has made a judgment about the video, and a save of the times is not a place to overrule it; only where there is no document yet do the sizes come from the defaults, because then there is no judgment to keep.");
  ("WHICH RECORDING THE TIMES BELONG TO IS WRITTEN DOWN RATHER THAN REMEMBERED. A time is a measurement against one performance and means nothing beside another, so a document holding times and no word about what they were measured against is a document nobody can check. The words themselves come off the shelf and can always be fetched again; this is the only fact in here that becomes unrecoverable the moment it is not recorded.");
  ("The passage and the translation's name are read from the shelf rather than taken from the screen. They are facts about the translation, not about the timing, and a screen that had been left open across a rename would otherwise write yesterday's wording back over today's.");
  let path_document = lyric_video_bible_document_path(
    version,
    book_code,
    chapter_number,
  );
  let existing = await file_exists(path_document);
  let sizes = {
    width: 1080,
    height: 1920,
    font_size: 150,
    passage_font_size: 96,
    credit_font_size: 64,
  };
  let document_timed = existing ? await file_read_json(path_document) : sizes;
  let passage = await bible_usfm_version_passage_text(
    version,
    book_code,
    chapter_number,
  );
  let credit = bible_usfm_version_credit_text(version);
  let song = await song_identity(file_name);
  let heard = {
    passage,
    credit,
    duration,
    lines,
    song,
  };
  object_merge_replace(document_timed, heard);
  await file_overwrite_json(path_document, document_timed);
  let r = {
    path_document,
    lines: lines.length,
  };
  return r;
}
