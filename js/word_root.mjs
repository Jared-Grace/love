import { text_lower_to } from "./text_lower_to.mjs";
import { word_root_irregulars } from "./word_root_irregulars.mjs";
import { property_exists } from "./property_exists.mjs";
import { word_root_e_drop } from "./word_root_e_drop.mjs";
import { word_root_est_past_or_null } from "./word_root_est_past_or_null.mjs";
import { word_root_ending_cut } from "./word_root_ending_cut.mjs";
export function word_root(w) {
  "The root one English word belongs to, so that two spellings of the same word can be met as one - formed and forms both reach form, and was reaches be.";
  "Case and punctuation go first, so a word met at the end of a sentence is the same word met in the middle of one.";
  "The words that change shape rather than take an ending are looked up by name before any ending is cut, because no rule about endings will ever turn men into man.";
  "This is the one seam its callers know. Whatever works out the root behind it can be replaced - by the Porter algorithm, or by a lemma list - without a caller changing.";
  let lower = text_lower_to(w);
  let letters = lower.replace(/[^a-z]+/g, "");
  let irregulars = word_root_irregulars();
  ("The irregular list is asked by its OWN names only. A plain lookup also finds what every object inherits, so constructor once came back as the root of the word constructor.");
  let own = property_exists(irregulars, letters);
  if (own) {
    let known = word_root_e_drop(irregulars[letters]);
    return known;
  }
  let past = word_root_est_past_or_null(letters);
  if (past) {
    let past_root = word_root_e_drop(past);
    return past_root;
  }
  let cut = word_root_ending_cut(letters);
  return cut;
}
