import { g_arc_previous_chapter } from "./g_arc_previous_chapter.mjs";
import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { g_arc_chapter_person_or_null } from "./g_arc_chapter_person_or_null.mjs";
import { assert_json } from "./assert_json.mjs";
import { g_arc_lines_addressed } from "./g_arc_lines_addressed.mjs";
import { g_arc_lines_by_address } from "./g_arc_lines_by_address.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { text_words_gone_come } from "./text_words_gone_come.mjs";
import { list_size } from "./list_size.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
export async function g_arc_revised_report(chapter_code, index) {
  "$plain chapter_code";
  "Every line of one person's arc that a rewrite actually moved, set beside what it used to say, with the words that went out and the words that came in.";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS WHAT MAKES REVISING CHEAP ENOUGH TO DO TWICE. A revision hands back a whole arc, and a reader with only the new one has to read all of it to find out whether the rewrite helped - which costs the same as reading it the first time, so in practice it does not get read, and the loop quietly stops being checked. Given the lines that moved and nothing else, the same reader spends a minute.";
  "IT READS THE STORE AND ASKS FOR NOTHING, because both versions are already kept - the live arc and the one the writer set aside as it was replaced. A caller holding two arcs is a caller who has already done the hard part.";
  "AN UNMOVED LINE IS LEFT OUT ENTIRELY. Printing every line with most of them marked unchanged is the whole arc again wearing a report's clothes, and the eye stops finding the few that matter.";
  "A LINE THAT ONLY EXISTS ON ONE SIDE IS REPORTED AS ITS OWN THING. The revision rules forbid adding or dropping a turn, so a line appearing or vanishing is not a rewrite to judge - it is the one failure the rules were written against, and it must not be shown as though somebody merely chose different words.";
  let previous_arcs = await g_arc_previous_chapter(chapter_code);
  let live_arcs = await g_arc_written_chapter(chapter_code);
  let wanted = number_from_text(index);
  let before_arc = g_arc_chapter_person_or_null(previous_arcs, wanted);
  let after_arc = g_arc_chapter_person_or_null(live_arcs, wanted);
  let kept = not_equal(before_arc, null);
  assert_json(kept, {
    chapter_code,
    index: wanted,
    hint: "no earlier version of this person is kept, so there is nothing to set the live one beside",
  });
  let written = not_equal(after_arc, null);
  assert_json(written, {
    chapter_code,
    index: wanted,
    hint: "no person of that number is written in this chapter",
  });
  let before_lines = g_arc_lines_addressed(before_arc);
  let after_lines = g_arc_lines_addressed(after_arc);
  let before_by_address = g_arc_lines_by_address(before_lines);
  let after_by_address = g_arc_lines_by_address(after_lines);
  let changed = [];
  let vanished = [];
  let appeared = [];
  for (let line of before_lines) {
    let address = property_get(line, "address");
    let before_text = property_get(line, "text");
    let after_text = property_or_null(after_by_address, address);
    let dropped = equal(after_text, null);
    if (dropped) {
      list_add(vanished, {
        address,
        text: before_text,
      });
      continue;
    }
    let same = equal(before_text, after_text);
    if (same) {
      continue;
    }
    let words = text_words_gone_come(before_text, after_text);
    list_add(changed, {
      address,
      before: before_text,
      after: after_text,
      gone: property_get(words, "gone"),
      come: property_get(words, "come"),
    });
  }
  for (let line of after_lines) {
    let address = property_get(line, "address");
    let before_text = property_or_null(before_by_address, address);
    let added = equal(before_text, null);
    if (added) {
      list_add(appeared, {
        address,
        text: property_get(line, "text"),
      });
    }
  }
  let r = {
    chapter_code,
    index: wanted,
    lines: list_size(after_lines),
    changed,
    vanished,
    appeared,
  };
  return r;
}
