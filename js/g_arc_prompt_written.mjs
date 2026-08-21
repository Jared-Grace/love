import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { g_arcs_passages_tally } from "./g_arcs_passages_tally.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function g_arc_prompt_written(written, passages) {
  "What the chapter already holds, written into the prompt for the next person: who has been written, in one line each, and how many turns have answered out of each passage so far.";
  "NOTHING WRITTEN YET IS EMPTY TEXT, and the prompt leaves the whole section out. A first person told that nobody has been written and that every passage stands at zero is being handed a paragraph that says nothing and asked to weigh it anyway.";
  "THE SUMMARIES ARE HERE BECAUSE PEOPLE WRITTEN BLIND TO EACH OTHER COME OUT AS ONE PERSON. Each call sees the same chapter, the same openers and the same instructions, so left to itself it writes the same arc with the trade changed - and nothing catches that, because every one of those arcs is correct on its own. A summary is the smallest thing that says who is already taken.";
  "THE TALLY IS HERE BECAUSE THE PROMPT ASKS FOR EQUAL USAGE AND USED TO HAND OVER NOTHING TO MEASURE IT AGAINST. Every call was evening out a chapter it believed it was the first to touch, so each of them leaned on whichever passages answer a trouble most plainly, and the chapter as a whole leaned the same way many times over. Measured on the first arc written: one passage carried five of thirty-seven turns while two carried none.";
  "COUNTS AND NOT INSTRUCTIONS. Which passages to even out follows from the numbers, and the numbers are what the next call is being trusted to read; a sentence naming the passages to favour would be this function deciding an arc it cannot see.";
  let none = list_empty_is(written);
  if (none) {
    let nothing = "";
    return nothing;
  }
  let arcs = [];
  let summaries = [];
  for (let entry of written) {
    let arc = property_get(entry, "arc");
    list_add(arcs, arc);
    let summary = property_get(arc, "summary");
    let said = list_join_empty(["  ", summary]);
    list_add(summaries, said);
  }
  let tally = g_arcs_passages_tally(arcs, passages);
  let counts = [];
  for (let entry2 of tally) {
    let reference = property_get(entry2, "reference");
    let turns = property_get(entry2, "turns");
    let counted = word_count_pluralize(turns, "turn");
    let line = list_join_empty(["  ", reference, " - ", counted]);
    list_add(counts, line);
  }
  let lines = [];
  list_add_multiple(lines, [
    "WHAT HAS ALREADY BEEN WRITTEN FOR THIS CHAPTER",
    "These people are already written, one line each. This person is somebody else - a different trouble, a different way of speaking, a different way of coming to God. Do not write another version of one of them.",
  ]);
  list_add_multiple(lines, summaries);
  list_add_multiple(lines, [
    "",
    "This is how many turns have answered out of each passage so far, across everybody above:",
  ]);
  list_add_multiple(lines, counts);
  list_add(
    lines,
    "Those counts are what equal usage is measured against. Even them out where the passage genuinely answers what this person says, and never by force.",
  );
  let r = list_join_newline(lines);
  return r;
}
