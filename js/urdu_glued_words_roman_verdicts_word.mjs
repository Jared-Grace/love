import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { equal } from "./equal.mjs";
import { text_split } from "./text_split.mjs";
import { lists_cartesian_product } from "./lists_cartesian_product.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { urdu_roman_spellings_piece_truncations_removed } from "./urdu_roman_spellings_piece_truncations_removed.mjs";
import { urdu_glued_words_control_verdict } from "./urdu_glued_words_control_verdict.mjs";
export function urdu_glued_words_roman_verdicts_word({
  script_verdicts,
  choices_of,
  joined_apart,
  spellings_of,
  joined_glued,
  occurrences,
  split,
  verdicts,
}) {
  "★ A LISTED WHOLE-WORD SPELLING IS PUT THROUGH THE PIECE TEST BEFORE IT IS SEARCHED FOR. The list of words is written by people typing what they would write, and for a rare run-together word some of them type only the first piece, so the list ends up offering a spelling that spells a part and not the whole. Left in, it is searched for and found everywhere, because a piece of a welded word is an ordinary short word; the reading then reports the control as insisting on the run-together form thousands of times in a Bible that never uses it once. The test throws those out and touches nothing else, and it needs no lookup of its own because the pieces' spellings were already worked out here for the spaced search.";
  "The test is not applied to a spelling built out of the pieces, only to one the list handed over whole. A built spelling is every piece joined up, so it cannot be a spelling of one piece unless another piece spells to nothing, and running the test over it would be asking a question whose answer is already known.";
  arguments_assert(arguments, 1);
  for (let word of object_property_names(script_verdicts)) {
    let spaced = property_path_get_2(script_verdicts, word, "spaced");
    let unproposed = equal(spaced, null);
    if (unproposed) {
      continue;
    }
    let pieces = text_split(spaced, " ");
    let choices = choices_of(pieces);
    let unspelled = equal(choices, null);
    if (unspelled) {
      continue;
    }
    let combinations = lists_cartesian_product(choices);
    let apart_texts = list_map(combinations, joined_apart);
    let word_spellings = spellings_of(word);
    let unlisted = equal(word_spellings, null);
    let listed = not(unlisted);
    let glued_texts = word_spellings;
    if (listed) {
      glued_texts = urdu_roman_spellings_piece_truncations_removed(
        word_spellings,
        choices,
      );
    }
    if (unlisted) {
      glued_texts = list_map(combinations, joined_glued);
    }
    let apart = occurrences(apart_texts);
    let glued = occurrences(glued_texts);
    let spacing_ruled = split[word];
    let unruled = equal(spacing_ruled, undefined);
    let spacing_wanted = not(unruled);
    let verdict = null;
    if (spacing_wanted) {
      verdict = urdu_glued_words_control_verdict(apart, glued);
    }
    let keeping = not(spacing_wanted);
    if (keeping) {
      verdict = urdu_glued_words_control_verdict(glued, apart);
    }
    let judged = {
      word,
      roman: glued_texts,
      roman_spaced: apart_texts,
      listed,
      glued,
      apart,
      verdict,
    };
    verdicts[word] = judged;
  }
}
