import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_built_chapters } from "./bible_audio_built_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { bible_audio_chapters_lines_due_record } from "./bible_audio_chapters_lines_due_record.mjs";
export async function bible_audio_built_record(bible_folder) {
  "$plain bible_folder";
  "Speaks again every piece of a recorded bible that now sounds different because the reader builds a guessed word from a known word plus an ending, and only those pieces; a stopped run carries on where it stopped.";
  arguments_assert(arguments, 1);
  let reported = await bible_audio_built_chapters(bible_folder);
  let chapters = property_get(reported, "chapters");
  let done = await bible_audio_chapters_lines_due_record(
    bible_folder,
    chapters,
  );
  return done;
}
