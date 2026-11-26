import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_joined_record_words } from "./bible_audio_joined_record_words.mjs";
export async function bible_audio_joined_record(bible_folder) {
  "$plain bible_folder";
  "Speaks again every piece of a bible holding any joined name the reader now reads from what is written down, and only those pieces, skipping a chapter whose named pieces were all spoken since the reader last changed.";
  arguments_assert(arguments, 1);
  let done = await bible_audio_joined_record_words(bible_folder, "");
  return done;
}
