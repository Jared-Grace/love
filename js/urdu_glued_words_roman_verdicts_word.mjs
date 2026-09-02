import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { equal } from "./equal.mjs";
import { text_split } from "./text_split.mjs";
import { lists_cartesian_product } from "./lists_cartesian_product.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { urdu_glued_words_control_verdict } from "./urdu_glued_words_control_verdict.mjs";
export function urdu_glued_words_roman_verdicts_word(
  script_verdicts,
  choices_of,
  joined_apart,
  spellings_of,
  joined_glued,
  occurrences,
  split,
  verdicts,
) {
  arguments_assert(arguments, 8);
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
