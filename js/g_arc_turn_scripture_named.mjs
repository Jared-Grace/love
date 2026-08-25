import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_answer_passage } from "./g_arc_answer_passage.mjs";
import { g_passage_reference } from "./g_passage_reference.mjs";
export function g_arc_turn_scripture_named(turn, passages) {
  "The passage one turn of a written arc answered from, said as the citation the game spells it by and the words of the passage itself.";
  "THE SCRIPTURE IS FOUND HERE AND NEVER KEPT IN THE ARC. A written arc stores the reference alone, because Scripture is already written down and a copy inside every turn is a second place for it to go wrong. Reading is the one moment the two belong side by side, so this is where they are put together.";
  "THE CITATION COMES BACK REBUILT RATHER THAN AS IT WAS WRITTEN, because what was written is whatever the answer copied back and what is shown has to be the one spelling this repo uses. Handed on as written, two readings of the same turn would print the same passage under two names.";
  "A REFERENCE NAMING A PASSAGE THAT WAS NEVER OFFERED STOPS THE READING rather than being handed on. It is the one check reading an arc performs, and a reading that swallowed it would show a turn that looks answered while the answer points at nothing.";
  "It is one function rather than the same few lines in each way of reading a turn, because a note filed against a turn on a screen and the same note filed off the printed page have to be about one line.";
  arguments_assert(arguments, 2);
  let reference_written = property_get(turn, "reference");
  let passage = g_arc_answer_passage(passages, reference_written);
  let reference = g_passage_reference(passage);
  let scripture = property_get(passage, "scripture");
  let r = {
    reference,
    scripture,
  };
  return r;
}
