import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_negation_doubled_cases } from "./bible_glyph_negation_doubled_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { bible_glyph_negation_doubled_words_reason } from "./bible_glyph_negation_doubled_words_reason.mjs";
import { bible_glyph_negation_doubled_names_walked } from "./bible_glyph_negation_doubled_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export function bible_glyph_negation_doubled_gate_run() {
  "QA gate: no picture Bible verse negates the same thing twice.";
  "A DOUBLED NEGATION IS THE ONE FAULT IN THIS BIBLE THAT INVERTS A VERSE RATHER THAN WEAKENING IT. Everything else a bad line can do leaves a reader with less than the verse says; this leaves them with its opposite. John ten promised that the sheep will perish, and Ezekiel thirty three promised twice that a repentant man's sins will be held against him. All three lines parsed, drew, and passed every gate that existed.";
  "IT MEASURES AGAINST NOUGHT AND NOT AGAINST A RECORD, which is possible here only because the three that existed were fixed before it was written. There is nothing to grandfather, so there is no baseline file, so there is no way to make this gate green by writing down what is wrong. That is worth more than the gate: a ratchet can only ever see a fault recur, and every one of these three was the first of its kind.";
  "THE CORPUS IS CHECKED BEFORE THE CHAPTERS ARE, and it is the half that matters. Zero faults in the chapters is also what a reader that had quietly stopped recognising the mark would report, and the three lines that shipped are written down next door exactly as they shipped, so a reader that could no longer catch them fails on them rather than on nothing.";
  "The two numbers handed back are how many cases were asked and how many verses were opened. Neither is a count of faults - that is nought on every passing run by construction, so printing it would be printing the silence this exists to break.";
  arguments_assert(arguments, 0);
  let cases = bible_glyph_negation_doubled_cases();
  function lambda(one) {
    let r3 = bible_glyph_negation_doubled_words_reason(one.words);
    return r3;
  }
  let checked = cases_gate_run_generic(
    cases,
    lambda,
    "reason",
    "why",
    "picture Bible verses that negate the same thing twice",
  );
  let told = bible_glyph_negation_doubled_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let refused = list_empty_is_assert_walked_generic(
    walked,
    offenders,
    "these picture Bible verses negate the same thing twice, so they draw as their own opposite - an adjacent one is one mark too many, and a quantifier one is a mark saying again what none or nothing or neither already said",
  );
  let verses = property_get(refused, "walked");
  let r = {
    checked,
    verses,
  };
  return r;
}
