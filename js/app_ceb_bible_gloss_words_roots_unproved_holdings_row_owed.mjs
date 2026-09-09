import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { gloss_root_dictionary_named } from "./gloss_root_dictionary_named.mjs";
export function app_ceb_bible_gloss_words_roots_unproved_holdings_row_owed(
  accent_free,
  known,
  folded_index,
) {
  arguments_assert(arguments, 3);
  function row_owed(row) {
    let roots = property_get(row, "roots");
    let word = property_get(row, "word");
    let sightings = property_get(row, "sightings");
    let chapters = property_get(row, "chapters");
    let first = list_get(roots, 0);
    let second = list_get(roots, 1);
    let first_plain = accent_free(first);
    let second_plain = accent_free(second);
    let same_word = equal(first_plain, second_plain);
    if (same_word) {
      let accented = {
        word,
        roots,
        owed: "accent",
        unheard: [],
        sightings,
        chapters,
      };
      return accented;
    }
    let first_named = gloss_root_dictionary_named(known, folded_index, first);
    let second_named = gloss_root_dictionary_named(known, folded_index, second);
    let first_holding = property_get(first_named, "holding");
    let second_holding = property_get(second_named, "holding");
    let first_absent = equal(first_holding, "absent");
    let second_absent = equal(second_holding, "absent");
    let unheard = [];
    if (first_absent) {
      unheard.push(first);
    }
    if (second_absent) {
      unheard.push(second);
    }
    let fetchable = first_absent || second_absent;
    let owed = "person";
    if (fetchable) {
      owed = "gather";
    }
    let answer = {
      word,
      roots,
      owed,
      holdings: [first_holding, second_holding],
      unheard,
      sightings,
      chapters,
    };
    return answer;
  }
  return row_owed;
}
