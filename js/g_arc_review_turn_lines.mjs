import { property_get } from "./property_get.mjs";
import { g_arc_answer_passage } from "./g_arc_answer_passage.mjs";
import { g_passage_reference } from "./g_passage_reference.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
export function g_arc_review_turn_lines(turn, passages, number) {
  "One turn of a written arc as it is read for review: what the person said, the passage the answer named, and that passage's own words printed underneath it.";
  "THE SCRIPTURE IS FETCHED HERE, NEVER STORED IN THE ARC. A written arc keeps the reference alone, because the Scripture is already written down and a second copy of it inside every turn is a second place for it to go wrong. Reading is the one moment the two belong side by side: the whole question a reviewer is asking is whether this passage answers what this person just said, and that cannot be judged against a reference.";
  "Finding the passage is what makes reading an arc CHECK it. A reference naming a passage that was never offered has nowhere to land and says so, rather than being printed as a line the reviewer would have to catch by eye.";
  "An empty after is left out rather than printed empty, because empty means the person carried straight on to their next line - a blank labelled after would show an absence as though it were something that happened.";
  let before = property_get(turn, "before");
  let reference_written = property_get(turn, "reference");
  let passage = g_arc_answer_passage(passages, reference_written);
  let reference = g_passage_reference(passage);
  let scripture = property_get(passage, "scripture");
  let lines = [];
  let item = text_combine_multiple([number, ". ", before]);
  list_add(lines, item);
  let item2 = text_combine_multiple(["   -> ", reference]);
  list_add(lines, item2);
  let item3 = text_combine_multiple(["      ", scripture]);
  list_add(lines, item3);
  let after = property_get(turn, "after");
  let empty = text_empty_is(after);
  if (not(empty)) {
    let item4 = text_combine_multiple(["   after: ", after]);
    list_add(lines, item4);
  }
  list_add(lines, "");
  return lines;
}
