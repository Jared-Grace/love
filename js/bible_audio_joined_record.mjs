import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_joined_chapters } from "./bible_audio_joined_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { file_modified_ms } from "./file_modified_ms.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { path_join } from "./path_join.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { ebible_text_to_speech_chapters } from "./ebible_text_to_speech_chapters.mjs";
export async function bible_audio_joined_record(bible_folder) {
  "$plain bible_folder";
  "Records again every chapter of a bible holding a joined name the reader now reads part by part, skipping chapters already recorded since the reader last changed.";
  "★ A CHAPTER ALREADY RECORDED SINCE THE SPEECH ENGINE'S SOURCE LAST CHANGED IS SKIPPED, SO A STOPPED RUN CARRIES ON RATHER THAN STARTING OVER. The finder still names a chapter after it is recorded again, because the line beside the sound keeps its hyphen; the age of the chapter's first piece is what says it is done. A later change to the engine makes every chapter due again, which only ever redoes work and never skips it.";
  "Nothing is removed first: the engine writes each piece over the old one by its number.";
  arguments_assert(arguments, 1);
  let reported = await bible_audio_joined_chapters(bible_folder);
  let chapters = property_get(reported, "chapters");
  let since = await file_modified_ms(
    text_combine_multiple(["./scripts/py/", fn_name("text_to_speech"), ".py"]),
  );
  async function due_is(chapter_code) {
    let folder = bible_audio_folder(bible_folder, chapter_code);
    let first = path_join([folder, "0.mp3"]);
    let ms = await path_modified_ms(first);
    let due = equal(ms, null) || less_than(ms, since);
    return due;
  }
  let due = [];
  for (let chapter_code of chapters) {
    if (await due_is(chapter_code)) {
      list_add(due, chapter_code);
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
  let codes = list_join_comma(due);
  let spoken = await ebible_text_to_speech_chapters(bible_folder, codes);
  let done = {
    chapters: list_size(chapters),
    due: list_size(due),
    spoken,
  };
  return done;
}
