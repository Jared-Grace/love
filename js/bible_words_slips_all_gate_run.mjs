import { json_to } from "./json_to.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_words_slips_all_cases } from "./bible_words_slips_all_cases.mjs";
import { property_get } from "./property_get.mjs";
import { bible_words_slips_all } from "./bible_words_slips_all.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function bible_words_slips_all_gate_run() {
  "Runs the whole-translation slip reading over its own small translation and fails the build if either asking of it comes back changed.";
  "Each asking is compared whole rather than by its counts, because a reading that named the right number of words and the wrong words would pass a count. The rows are flattened first - the commonest neighbour, how many neighbours there were, and the chapter the word was first met in - so that a difference anywhere in a row shows as a difference in the answer.";
  "★ THE TWO ASKINGS DIFFER ONLY IN THE LEAST LENGTH, SO THIS GATE FAILS IF THAT LENGTH STOPS DOING ANYTHING. A reading that ignored the length would return the same nine-word answer to both and the shorter asking would go red on its own.";
  arguments_assert(arguments, 0);
  let c = bible_words_slips_all_cases();
  let sightings = property_get(c, "sightings");
  let times = property_get(c, "times");
  let askings = property_get(c, "askings");
  let defects = [];
  function asking_checked(asking) {
    let letters = property_get(asking, "letters");
    let expected = property_get(asking, "expected");
    let r = bible_words_slips_all(sightings, times, letters);
    function row_flat(row) {
      let nearer = property_get(row, "nearer");
      let best = nearer[0];
      let first = property_get(row, "first");
      let flat = {
        word: property_get(row, "word"),
        seen: property_get(row, "seen"),
        nearest: property_get(best, "word"),
        nearest_seen: property_get(best, "seen"),
        nearer_size: list_size(nearer),
        first_chapter: property_get(first, "chapter_code"),
      };
      return flat;
    }
    let rows = property_get(r, "rows");
    let got = {
      vocabulary_size: property_get(r, "vocabulary_size"),
      examined: property_get(r, "examined"),
      suspect: property_get(r, "suspect"),
      rows: list_map(rows, row_flat),
    };
    let wrong = json_equal_not(got, expected);
    if (wrong) {
      let f_name = fn_name("bible_words_slips_all");
      let defect =
        text_combine_multiple([f_name, " from "]) +
        letters +
        " letters up answered " +
        json_to(got) +
        " and was expected to answer " +
        json_to(expected);
      list_add(defects, defect);
      console.log(defect);
    }
  }
  each(askings, asking_checked);
  let failed = list_empty_not_is(defects);
  if (failed) {
    let f_name2 = fn_name("bible_words_slips_all_gate_run");
    throw new Error(
      text_combine_multiple([f_name2, ": "]) +
        list_size(defects) +
        " of " +
        list_size(askings) +
        " askings answered differently",
    );
  }
  let answer = {
    checked: list_size(askings),
    defects: list_size(defects),
  };
  return answer;
}
