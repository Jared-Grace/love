import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { g_leader_book_groups_merged } from "./g_leader_book_groups_merged.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export function g_leader_book_groups() {
  "Every book of the canon as the group one set of leader arcs is written against, in canonical order, with the few small books joined to their neighbour.";
  "A GROUP IS A BOOK. The partition was going to be drawn by a ceiling on how much Scripture one writing call could hold, and the measurement says no book comes near it - Romans, the longest letter, is 12.7 thousand tokens and the whole written corpus is 28.5. So nothing is split, and the only work left is joining the few books too small to stand alone.";
  "The canonical order is read off the bible rather than retyped, so a group is always a contiguous run of it and the groups come out in reading order without being sorted.";
  "The merged runs are anchored at their FIRST book: walking the canon, a book that opens a run emits the whole run and the rest of that run are passed over. That is what keeps a group in its own place in the order rather than at the end.";
  let codes = ebible_book_codes();
  let merged = g_leader_book_groups_merged();
  let run_by_book = {};
  for (let run of merged) {
    for (let book of run) {
      run_by_book[book] = run;
    }
  }
  let groups = [];
  for (let code of codes) {
    let run = run_by_book[code];
    let alone = not(run);
    if (alone) {
      list_add(groups, [code]);
      continue;
    }
    let first = equal(run[0], code);
    if (first) {
      list_add(groups, run);
    }
  }
  return groups;
}
