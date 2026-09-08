import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_roots_claimed_gathered } from "./gloss_chapters_roots_claimed_gathered.mjs";
import { property_get } from "./property_get.mjs";
import { object_values } from "./object_values.mjs";
import { each } from "./each.mjs";
export async function gloss_chapters_roots_claimed_rows_generic(fn, row_read) {
  "Hands a reading every row a gloss store's claimed roots were gathered into, one at a time, and hands back the gathering itself so the reading can still say how big the store was.";
  "Seven readings ask the same first question of the Cebuano store - what roots does it claim, and where - and every one of them opened with the same five lines: gather, take the filing out of the gathering, list the names it filed under, walk those names, fetch back the row each name was filed under. The rows were what every one of them wanted; the names were a detour through the filing on the way to them.";
  "The row is handed over rather than the name because a row already carries the root it was filed under, written there by the gatherer at the moment it filed it, so nothing is lost and one fetch per root goes away. A reading that wants the root asks the row for its stated root.";
  "The gathering is handed back whole and nothing is stamped onto an answer here, because the seven readings disagree about which of its counts they report and in what words - one calls the entry count a strict total, three do not mention it at all. Handing back a finished answer would force one of those choices on all seven; handing back the gathering leaves each reading saying exactly what it said before.";
  "★ THE ORDER IS THE ORDER THE STORE WAS WALKED IN, NOT AN ORDER. Rows come out in the order their roots were first met, which follows the order the chapters came back. A reading that wants the worst first ranks what it gathered afterwards, the way all seven already do.";
  "$plain fn";
  "the function names a gloss store and is looked up for its own name only; nothing here calls it.";
  arguments_assert(arguments, 2);
  let gathered = await gloss_chapters_roots_claimed_gathered(fn);
  let by_root = property_get(gathered, "by_root");
  let rows = object_values(by_root);
  each(rows, row_read);
  return gathered;
}
