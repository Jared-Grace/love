import { app_ceb_bible_verses_all } from "./app_ceb_bible_verses_all.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_verses_hyphen_words_measured } from "./bible_verses_hyphen_words_measured.mjs";
export async function app_ceb_bible_hyphen_words_measured() {
  "Whether a hyphen stands inside a Cebuano word or between two of them, asked of the Cebuano translation itself.";
  "It matters because the reading that counts the translation's words ends a word at a hyphen, and every reading built on that one inherits the answer: the word sightings, the slip scan, the search index. If the hyphen belongs inside the word then those readings have been filing fragments as words and losing the real words entirely, and thirty-two words the gloss queue asked about went missing for exactly that reason.";
  "Nothing here changes any of those readings. This is the measurement the change would have to rest on, and it is worth having on its own whichever way it comes out.";
  arguments_assert(arguments, 0);
  let verses = await app_ceb_bible_verses_all();
  let r = bible_verses_hyphen_words_measured(verses);
  return r;
}
