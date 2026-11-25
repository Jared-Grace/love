import { arguments_assert } from "./arguments_assert.mjs";
import { bible_word_buttons_guessed } from "./bible_word_buttons_guessed.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { english_words_sound_remake } from "./english_words_sound_remake.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_word_buttons_joined_remake(bible_folder) {
  "$plain bible_folder";
  "Records again, in every voice and at both speeds, and sends up, every tapped-word recording of one bible that is a joined name the recorder now reads part by part.";
  "★ IT FINDS ITS OWN WORDS, FROM THE SPELLING THE RECORDER ITSELF WOULD READ. A joined word is chosen only when that spelling differs from the word, which is exactly when every part has a written answer. Measured 2026-11-25: 261 of the 274 guessed joined button words in the BSB.";
  "It goes in batches of a hundred, each sent up before the next starts, so a stopped run has already delivered every finished batch. Bump both recording stamps in the same commit as the upload.";
  arguments_assert(arguments, 1);
  let reported = await bible_word_buttons_guessed(bible_folder);
  let guessed = property_get(reported, "guessed");
  function mended_is(g) {
    let word = property_get(g, "word");
    let said = property_get(g, "said_alone");
    let mended = text_includes(word, "-") && not(equal(said, word));
    return mended;
  }
  let mended = list_filter(guessed, mended_is);
  function word_get(g) {
    let word = property_get(g, "word");
    return word;
  }
  let words = list_map(mended, word_get);
  let size = 100;
  let batches = [];
  for (let i = 0; less_than(i, list_size(words)); i += size) {
    let batch = words.slice(i, i + size);
    let joined = batch.join(",");
    let made = await english_words_sound_remake(joined);
    let sent = property_get(made, "sent");
    list_add(batches, {
      from: i,
      words: list_size(batch),
      sent: list_size(sent),
    });
  }
  let r = {
    words: list_size(words),
    batches,
  };
  return r;
}
