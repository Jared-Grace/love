import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_word_buttons_guessed } from "./bible_word_buttons_guessed.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { english_words_sound_remake } from "./english_words_sound_remake.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_word_buttons_capital_remake(bible_folder) {
  "$plain bible_folder";
  "Records again, in every voice and at both speeds, and sends up, every tapped-word recording of one bible that was guessed in small letters but has a written answer under its capital.";
  "★ IT FINDS ITS OWN WORDS RATHER THAN BEING HANDED THEM, because the list is two thousand words long and is exactly the answer the button check already gives. Handed a list, a caller could hand a stale one.";
  "★ IT GOES IN BATCHES OF A HUNDRED, EACH SENT UP BEFORE THE NEXT STARTS, because the whole set is most of a day of speaking. A run stopped part way has then already delivered every finished batch, rather than holding every recording on this machine until the last word is said.";
  "The recorder itself is what speaks the capital - a lone word it can only answer with a capital is read from that spelling - so this only chooses which recordings to make again. Bump both recording stamps in the same commit as the upload.";
  arguments_assert(arguments, 1);
  let reported = await bible_word_buttons_guessed(bible_folder);
  let guessed = property_get(reported, "guessed");
  function mended_is(g) {
    let known = property_get(g, "capital_known");
    return known;
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
