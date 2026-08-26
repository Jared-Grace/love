import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_sentence_ends } from "./text_sentence_ends.mjs";
export function bible_glyph_negation_doubled_words_reason(words) {
  "$plain words";
  "The one verse of a picture Bible chapter, as the list of shorthand words a person typed.";
  "Says why this verse negates the same thing twice, or says nothing at all when it does not. Two shapes are named because two are all that can be judged without reading the sentence: a negation mark standing next to another negation, and a negative quantifier followed by a negation mark before the sentence ends.";
  "IT EXISTS BECAUSE A DOUBLED NEGATION IS THE ONE DEFECT IN THIS BIBLE THAT INVERTS A VERSE RATHER THAN DULLING IT. In English two negatives are emphasis and a reader steps over the second one; drawn mark for word they are arithmetic, and the strongest assurance verse in John ten once read as its own opposite. Ezekiel thirty three said the same thing twice more. All three parsed, drew and passed every gate this Bible had.";
  "AND IT REFUSES TO GUESS AT THE THIRD SHAPE. Two negations in one verse is ordinary - fifty four verses here hold two, and in every one of them they sit in separate clauses each negating its own verb. Telling those apart from a real doubling needs the clause boundary, and English writes plenty of clause boundaries with no punctuation at all, so a window rule reports whoever does not love Me does not keep My word as a fault. What is left is the two shapes that no clause boundary can fall inside, and those two are answered exactly rather than approximately.";
  "The answer is the reason rather than a yes, because the two shapes are cleared by different edits: a doubled mark is one mark too many, and a quantifier with a mark after it is a mark that the quantifier already said.";
  arguments_assert(arguments, 1);
  let words_quantifying = ["none", "nothing", "nobody", "neither"];
  let quantified = false;
  let previous_negates = false;
  for (let word of words) {
    let lower = text_lower_to(word);
    let bare = text_letters_only(lower);
    let is_mark = equal(bare, "noentry");
    let is_quantifier = list_includes(words_quantifying, bare);
    if (is_mark && previous_negates) {
      let r = "adjacent";
      return r;
    }
    if (is_mark && quantified) {
      let r2 = "quantifier";
      return r2;
    }
    if (is_quantifier) {
      quantified = true;
    }
    previous_negates = is_mark || is_quantifier;
    let sentence_ends = text_sentence_ends(word);
    if (sentence_ends) {
      quantified = false;
    }
  }
  let r3 = "";
  return r3;
}
