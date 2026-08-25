import { g_arc_turn_scripture_named } from "./g_arc_turn_scripture_named.mjs";
import { g_arc_review_marks } from "./g_arc_review_marks.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
export function g_arc_review_turn_lines(turn, passages, number) {
  "One turn of a written arc as it is read for review: what the person said, the passage the answer named, and that passage's own words printed underneath it.";
  "THE SCRIPTURE IS ASKED FOR RATHER THAN FETCHED HERE, and asking is what makes reading an arc CHECK it - a reference naming a passage nobody offered has nowhere to land and says so, rather than being printed as a line the reviewer would have to catch by eye. The screen that shows the same turn asks in the same words.";
  "THE TURN WHERE THEY BELIEVE IS SHOWN IN CAPITALS, on the one turn that carries it. It is the only line of a turn that is not somebody speaking, and a reviewer reading straight down the page needs to see the moment the arc turns without hunting for it - which is the whole of what a reviewer asked for when they said the page has to say when conversion happens.";
  "An empty after is left out rather than printed empty, because empty means the person carried straight on to their next line - a blank labelled after would show an absence as though it were something that happened.";
  let answered = g_arc_turn_scripture_named(turn, passages);
  let reference = property_get(answered, "reference");
  let scripture = property_get(answered, "scripture");
  let marks = g_arc_review_marks();
  let lines = [];
  let value = property_get(marks, "number");
  let before = property_get(turn, "before");
  let item = text_combine_multiple([number, value, before]);
  list_add(lines, item);
  let value2 = property_get(marks, "reference");
  let item2 = text_combine_multiple([value2, reference]);
  list_add(lines, item2);
  let value3 = property_get(marks, "scripture");
  let item3 = text_combine_multiple([value3, scripture]);
  list_add(lines, item3);
  let after = property_get(turn, "after");
  let empty = text_empty_is(after);
  if (not(empty)) {
    let value4 = property_get(marks, "after");
    let item4 = text_combine_multiple([value4, after]);
    list_add(lines, item4);
  }
  let believes = property_get(turn, "believes");
  let unmarked = text_empty_is(believes);
  if (not(unmarked)) {
    let value5 = property_get(marks, "believes");
    let item5 = text_combine_multiple([value5, believes]);
    list_add(lines, item5);
  }
  list_add(lines, "");
  return lines;
}
