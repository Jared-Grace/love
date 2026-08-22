import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function words_game_taught_glosses_defects_word(taught_words, written) {
  arguments_assert(arguments, 2);
  let defects = [];
  for (let word of taught_words) {
    let answered = list_includes(written, word);
    if (not(answered)) {
      let missing = {
        word,
        fault: "the game teaches this word and nothing here says what it means",
      };
      list_add(defects, missing);
    }
  }
  return defects;
}
