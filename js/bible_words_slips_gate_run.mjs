import { bible_words_slips_cases } from "./bible_words_slips_cases.mjs";
import { property_get } from "./property_get.mjs";
import { bible_words_slips } from "./bible_words_slips.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_map } from "./list_map.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { json_to } from "./json_to.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function bible_words_slips_gate_run() {
  "Fails the build when the misprint shortlist stops naming the words its corpus was written to have it name, or starts naming the ones it was written to have it pass over.";
  "The whole answer is compared rather than the count of it. A count agrees with itself while the reading names entirely different words, and this is a reading whose only output is which words it named.";
  let c = bible_words_slips_cases();
  let sightings = property_get(c, "sightings");
  let words = property_get(c, "words");
  let times = property_get(c, "times");
  let expected = property_get(c, "expected");
  let r = bible_words_slips(sightings, words, times);
  let rows = property_get(r, "rows");
  function row_named(row) {
    let word = property_get(row, "word");
    let seen = property_get(row, "seen");
    let nearer = property_get(row, "nearer");
    let best = nearer[0];
    let nearest = property_get(best, "word");
    let nearest_seen = property_get(best, "seen");
    let first = property_get(row, "first");
    let b = null_is(first);
    let first_seen_is = not(b);
    let row_made = {
      word,
      seen,
      nearest,
      nearest_seen,
      first_seen_is,
    };
    return row_made;
  }
  let named = list_map(rows, row_named);
  let got = {
    vocabulary_size: property_get(r, "vocabulary_size"),
    examined: property_get(r, "examined"),
    suspect: property_get(r, "suspect"),
    rows: named,
  };
  let defects = [];
  let wrong = json_equal_not(got, expected);
  if (wrong) {
    let told = json_to(got);
    let wanted = json_to(expected);
    list_add(defects, "expected " + wanted + " but read " + told);
  }
  function defect_print(defect) {
    console.log(defect);
  }
  each(defects, defect_print);
  let count = list_size(defects);
  let clean = list_empty_is(defects);
  if (not(clean)) {
    throw new Error("bible words slips defects: " + count);
  }
  let r2 = {
    checked: list_size(words),
    defects: count,
  };
  return r2;
}
