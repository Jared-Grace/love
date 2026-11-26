import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_joined_chapters_words } from "./bible_audio_joined_chapters_words.mjs";
export async function bible_audio_joined_chapters(bible_folder) {
  "$plain bible_folder";
  "The chapters of a recorded bible, each with its piece numbers, holding any joined name the reader now reads from what is written down, so their recording says it the old, guessed way.";
  arguments_assert(arguments, 1);
  let reported = await bible_audio_joined_chapters_words(bible_folder, []);
  return reported;
}
