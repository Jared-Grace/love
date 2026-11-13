import { arguments_assert } from "./arguments_assert.mjs";
import { bible_word_spellings } from "./bible_word_spellings.mjs";
import { not_equal } from "./not_equal.mjs";
export function bible_word_articles_spellings_add_spellings(others) {
  "Fills the map with each spelling the bibles use, pointing at the other spellings of the same word.";
  arguments_assert(arguments, 1);
  for (let spellings of bible_word_spellings()) {
    for (let spelling of spellings) {
      function lambda(s) {
        let neq = not_equal(s, spelling);
        return neq;
      }
      let v = spellings.filter(lambda);
      others.set(spelling, v);
    }
  }
}
