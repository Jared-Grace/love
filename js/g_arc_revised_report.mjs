import { g_arc_previous_chapter } from "./g_arc_previous_chapter.mjs";
import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { g_npc_nickname_index } from "./g_npc_nickname_index.mjs";
import { g_arc_chapter_person_or_null } from "./g_arc_chapter_person_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { g_arc_lines_moved } from "./g_arc_lines_moved.mjs";
import { property_get } from "./property_get.mjs";
export async function g_arc_revised_report(chapter_code, nickname) {
  "$plain chapter_code";
  "$plain nickname";
  "Every line of one person's arc that a rewrite actually moved, set beside what it used to say, with the words that went out and the words that came in.";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS WHAT MAKES REVISING CHEAP ENOUGH TO DO TWICE. A revision hands back a whole arc, and a reader with only the new one has to read all of it to find out whether the rewrite helped - which costs the same as reading it the first time, so in practice it does not get read, and the loop quietly stops being checked. Given the lines that moved and nothing else, the same reader spends a minute.";
  "IT READS THE STORE AND ASKS FOR NOTHING, because both versions are already kept - the live arc and the one the writer set aside as it was replaced. A caller holding two arcs is a caller who has already done the hard part.";
  "WHAT MOVED IS COUNTED ELSEWHERE, because the same arithmetic answers what a rewrite moved and what has moved since somebody last read the arc. The pair is the only difference between those two questions, so the pair is what this picks and nothing else.";
  let previous_arcs = await g_arc_previous_chapter(chapter_code);
  let live_arcs = await g_arc_written_chapter(chapter_code);
  let wanted = await g_npc_nickname_index(nickname);
  let before_arc = g_arc_chapter_person_or_null(previous_arcs, wanted);
  let after_arc = g_arc_chapter_person_or_null(live_arcs, wanted);
  let kept = not_equal(before_arc, null);
  assert_json(kept, {
    chapter_code,
    nickname,
    hint: "no earlier version of this person is kept, so there is nothing to set the live one beside",
  });
  let written = not_equal(after_arc, null);
  assert_json(written, {
    chapter_code,
    nickname,
    hint: "nobody by that name is written in this chapter",
  });
  let moved = g_arc_lines_moved(before_arc, after_arc);
  let r = {
    chapter_code,
    nickname,
    lines: property_get(moved, "lines"),
    changed: property_get(moved, "changed"),
    vanished: property_get(moved, "vanished"),
    appeared: property_get(moved, "appeared"),
  };
  return r;
}
