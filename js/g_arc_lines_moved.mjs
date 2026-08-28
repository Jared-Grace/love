import { g_arc_lines_addressed } from "./g_arc_lines_addressed.mjs";
import { g_arc_lines_by_address } from "./g_arc_lines_by_address.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { text_words_gone_come } from "./text_words_gone_come.mjs";
import { list_size } from "./list_size.mjs";
export function g_arc_lines_moved(before_arc, after_arc) {
  "Every line of one arc that moved between two versions of it, set beside what it used to say, with the words that went out and the words that came in.";
  "IT TAKES TWO ARCS AND ASKS THE STORE NOTHING, which is what lets the same comparison answer two different questions. What moved since the last write and what moved since a person last read it are the same arithmetic over different pairs, and a comparison that fetched its own pair could only ever answer one of them. Written twice instead, the two copies would agree about the six things that do not differ and disagree about the one that does, which is the shape a fix lands in one copy of.";
  "AN UNMOVED LINE IS LEFT OUT ENTIRELY. Printing every line with most of them marked unchanged is the whole arc again wearing a report's clothes, and the eye stops finding the few that matter.";
  "A LINE THAT ONLY EXISTS ON ONE SIDE IS REPORTED AS ITS OWN THING. The revision rules forbid adding or dropping a turn, so a line appearing or vanishing is not a rewrite to judge - it is the one failure the rules were written against, and it must not be shown as though somebody merely chose different words.";
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
    lines: list_size(after_lines),
    changed,
    vanished,
    appeared,
  };
  return r;
}
