import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_joined_chapters } from "./bible_audio_joined_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { file_modified_ms } from "./file_modified_ms.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { ebible_text_to_speech_chapters_lines } from "./ebible_text_to_speech_chapters_lines.mjs";
export async function bible_audio_joined_record(bible_folder) {
  "$plain bible_folder";
  "Speaks again every piece of a bible holding a joined name the reader now reads part by part, and only those pieces, skipping a chapter whose named pieces were all spoken since the reader last changed.";
  "★ ONLY THE PIECES HOLDING SUCH A NAME ARE SPOKEN, BECAUSE THE WHOLE CHAPTER TOOK FIVE MINUTES A CHAPTER. Measured 2026-11-26: four workers finished four of 288 chapters in twenty minutes, about a day for all of them, while the pieces that change are a few lines in each.";
  "★ A CHAPTER WHOSE NAMED PIECES ARE ALL NEWER THAN THE SPEECH ENGINE'S SOURCE IS SKIPPED, SO A STOPPED RUN CARRIES ON RATHER THAN STARTING OVER. The finder still names a piece after it is spoken again, because the line beside the sound keeps its hyphen; the age of the sound is what says it is done. A later change to the engine makes every piece due again, which only ever redoes work and never skips it.";
  "Nothing is removed first: the engine writes each named piece over the old one by its number.";
  arguments_assert(arguments, 1);
  let reported = await bible_audio_joined_chapters(bible_folder);
  let chapters = property_get(reported, "chapters");
  let since = await file_modified_ms("./scripts/py/text_to_speech.py");
  async function due_is(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let lines = property_get(chapter, "lines");
    let folder = bible_audio_folder(bible_folder, chapter_code);
    for (let line of lines) {
      let name = text_combine_multiple([line, ".mp3"]);
      let piece = path_join([folder, name]);
      let ms = await path_modified_ms(piece);
      if (equal(ms, null) || less_than(ms, since)) {
        return true;
      }
    }
    return false;
  }
  let due = [];
  for (let chapter of chapters) {
    if (await due_is(chapter)) {
      list_add(due, chapter);
    }
  }
  if (list_empty_is(due)) {
    let nothing = {
      chapters: list_size(chapters),
      due: 0,
      spoken: null,
    };
    return nothing;
  }
  let spoken = await ebible_text_to_speech_chapters_lines(bible_folder, due);
  let done = {
    chapters: list_size(chapters),
    due: list_size(due),
    spoken,
  };
  return done;
}
