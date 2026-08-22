import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { add_1 } from "./add_1.mjs";
import { word_early_reader_known_is } from "./word_early_reader_known_is.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
export function g_arc_words_uncommon_word(r2, counts, known_words, homes) {
  "The words a beginning reader would not know, sorted into the two kinds worth acting on: the ones said exactly once in the whole game, and the ones said often but only ever by a single character.";
  "A WORD ONLY ONE MOUTH EVER SAYS IS THE ONE WORTH TEACHING, because it belongs to that character and will come back; a word said once anywhere at all is the one worth cutting, because nothing later in the game depends on the reader having learned it.";
  arguments_assert(arguments, 4);
  let mouths = property_get(r2, "mouths");
  let once = [];
  let own = [];
  let words = 0;
  let known = 0;
  for (let word of object_property_names(counts)) {
    words = add_1(words);
    let already = word_early_reader_known_is(word, known_words);
    if (already) {
      known = add_1(known);
      continue;
    }
    let uses = property_get(counts, word);
    let home = property_get(homes, word);
    let chapter_code = property_get(home, "chapter_code");
    let index = property_get(home, "index");
    let alone = equal(uses, 1);
    if (alone) {
      list_add(once, {
        word,
        chapter_code,
        index,
      });
    }
    let again = not(alone);
    if (again) {
      let heard = property_get(mouths, word);
      let list = object_property_names(heard);
      let only = list_size_equal(list, 1);
      if (only) {
        list_add(own, {
          word,
          uses,
          chapter_code,
          index,
        });
      }
    }
  }
  let r = {
    once,
    own,
    words,
    known,
  };
  return r;
}
