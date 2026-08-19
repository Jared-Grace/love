import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { bless_rungs } from "./bless_rungs.mjs";
export function bless_rung_after(rung) {
  arguments_assert(arguments, 1);
  ("The rung one step further out than this one - what a player standing here is climbing");
  ("toward.");
  ("Read off the ladder's ORDER rather than from a table of its own, because containment");
  ("is the order: the rung after a block is what a block belongs to. A second listing");
  ("would be the same fact written twice and free to disagree with the first.");
  ("The top of the ladder answers nothing, and that is the honest answer rather than a");
  ("gap. There is nowhere further out than everyone alive, so a player who has reached it");
  ("has nothing left to earn - which is the game being finished, not a case to guard.");
  let rungs = bless_rungs();
  let here = list_index_of(rungs, rung);
  let above = add(here, 1);
  let next = list_get_or_null(rungs, above);
  return next;
}
