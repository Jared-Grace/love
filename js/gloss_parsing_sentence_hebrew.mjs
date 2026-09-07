import { property_equals } from "./property_equals.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { gloss_parsing_phrases_hebrew } from "./gloss_parsing_phrases_hebrew.mjs";
import { gloss_parsing_prefix_phrases_hebrew } from "./gloss_parsing_prefix_phrases_hebrew.mjs";
import { text_split } from "./text_split.mjs";
import { gloss_parsing_hebrew_atoms } from "./gloss_parsing_hebrew_atoms.mjs";
import { list_add } from "./list_add.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_join } from "./list_join.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function gloss_parsing_sentence_hebrew(parsing_long) {
  "One Hebrew word's spelled-out parsing said as a plain English sentence, and nothing when the parsing holds a fact the phrase table has no entry for.";
  "$plain parsing_long";
  "the parsing is the interlinear's own spelling of it, the grammarians' shorthand as the table hands it over. It is words to read and nothing that runs.";
  "A Hebrew parsing is shaped nothing like a Greek one and so is read by a different reader. Greek gives the features of one written word and the sentence is those features put in an order a reader can follow. Hebrew glues small words onto the front of a word and endings onto its back, and writes all three inside one parsing separated by bars, so the sentence has to say what the word itself is and then what is stuck to either side of it. Bagging the words and sorting them by dimension, which is what the Greek reader does, would lose the one thing that decides the meaning here, which is where each piece stands.";
  "Where the word itself stands is settled by walking in from the back rather than by counting. What hangs off the end of a Hebrew word is always a person and gender and number, and those are the only things it can be, so the last piece that is something else is the word. Everything before it was written onto its front and everything after it onto its back, and neither of those needs to be counted or guessed at.";
  "The same person and gender and number means two different things in the two places it can stand, and the position is the only thing that tells them apart. Inside the word it says who does the action; hanging off the end it says who the action was done to, or whose the thing is. So the table's second wording is read for a piece found after the word and its first for one found inside it.";
  "Nothing comes back rather than a sentence with a hole in it, the same refusal the Greek reader makes and for the same reason. A parsing the table cannot say in full is one the source has not spelled out - it still holds codes like cdc and md that were meant to be expanded and were not - and a sentence that quietly dropped one would tell a reader the word carries less than it does.";
  let phrases = gloss_parsing_phrases_hebrew();
  let prefix_phrases = gloss_parsing_prefix_phrases_hebrew();
  let segments = text_split(parsing_long, " | ");
  let blocks = [];
  for (let segment of segments) {
    let atoms = gloss_parsing_hebrew_atoms(segment);
    list_add(blocks, atoms);
  }
  function block_who_is(atoms) {
    "Whether every fact in one piece is a person and gender and number, which is what makes a piece an ending rather than the word.";
    for (let atom of atoms) {
      let entry = list_find_property_or_null(phrases, "word", atom);
      if (not(entry)) {
        return false;
      }
      let who_is = property_equals(entry, "dimension", "who");
      if (not(who_is)) {
        return false;
      }
    }
    return true;
  }
  let count = list_size(blocks);
  let head_at = subtract(count, 1);
  let walking = true;
  while (walking) {
    let first_is = equal(head_at, 0);
    if (first_is) {
      walking = false;
      continue;
    }
    let who_is = block_who_is(blocks[head_at]);
    if (not(who_is)) {
      walking = false;
      continue;
    }
    head_at = subtract(head_at, 1);
  }
  let head_atoms = blocks[head_at];
  let head_parts = [];
  let first_head = true;
  for (let atom of head_atoms) {
    let entry = list_find_property_or_null(phrases, "word", atom);
    if (not(entry)) {
      return null;
    }
    let kind_is = property_equals(entry, "dimension", "kind");
    if (first_head) {
      if (not(kind_is)) {
        return null;
      }
      first_head = false;
    }
    let phrase = property_get(entry, "phrase");
    list_add(head_parts, phrase);
  }
  let front_parts = [];
  for (let at = 0; less_than(at, head_at); at++) {
    for (let atom of blocks[at]) {
      let entry = list_find_property_or_null(prefix_phrases, "word", atom);
      if (not(entry)) {
        return null;
      }
      let phrase = property_get(entry, "phrase");
      list_add(front_parts, phrase);
    }
  }
  let back_parts = [];
  for (let at = head_at + 1; less_than(at, count); at++) {
    for (let atom of blocks[at]) {
      let entry = list_find_property_or_null(phrases, "word", atom);
      if (not(entry)) {
        return null;
      }
      let phrase = property_get(entry, "suffix");
      if (not(phrase)) {
        return null;
      }
      list_add(back_parts, phrase);
    }
  }
  let clauses = [];
  let head_text = list_join_comma_space(head_parts);
  list_add(clauses, head_text);
  let any_front = list_size(front_parts);
  if (any_front) {
    let front_text = list_join(front_parts, ", then ");
    let front_clause = text_combine_multiple([
      "with ",
      front_text,
      " written onto its front",
    ]);
    list_add(clauses, front_clause);
  }
  let any_back = list_size(back_parts);
  if (any_back) {
    let back_text = list_join(back_parts, ", then ");
    let back_clause = text_combine_multiple([
      "and an ending meaning ",
      back_text,
    ]);
    list_add(clauses, back_clause);
  }
  let body = list_join_comma_space(clauses);
  let sentence = text_combine_multiple(["This is ", body, "."]);
  return sentence;
}
