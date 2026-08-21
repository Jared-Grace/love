import { g_arc_passages_tally } from "./g_arc_passages_tally.mjs";
import { g_arc_review_marks } from "./g_arc_review_marks.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { list_add } from "./list_add.mjs";
export function g_arc_review_tally_lines(arc, passages) {
  "The passages a written arc was offered and how many of its turns answered out of each, as the lines that close a review page.";
  "IT IS PRINTED AT THE END rather than at the top, because it is a reading of the arc and not part of it. Read first it is a list of references nobody has met yet; read last, each line is about turns already read, and the passages showing no turns are the question the reviewer is left holding.";
  "A COUNT OF ZERO IS PRINTED like any other count. Leaving the unused ones out would make the tally shorter and lose the one thing it is for, and a reader cannot tell a passage that was left out from one that was never offered.";
  let tally = g_arc_passages_tally(arc, passages);
  let marks = g_arc_review_marks();
  let mark = property_get(marks, "tally");
  let lines = [];
  let heading = text_combine_multiple([
    mark,
    "passages offered, and the turns that answered out of each",
  ]);
  list_add(lines, heading);
  for (let entry of tally) {
    let reference = property_get(entry, "reference");
    let turns = property_get(entry, "turns");
    let counted = word_count_pluralize(turns, "turn");
    let line = text_combine_multiple([mark, reference, " - ", counted]);
    list_add(lines, line);
  }
  return lines;
}
