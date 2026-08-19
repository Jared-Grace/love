import { arguments_assert } from "./arguments_assert.mjs";
import { list_index_of_add } from "./list_index_of_add.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { bless_rungs } from "./bless_rungs.mjs";
export function bless_rung_before(rung) {
  arguments_assert(arguments, 1);
  ("The rung one step closer in than this one - what a place of this size is made of.");
  ("Read off the ladder's ORDER, the same as the rung above is, because containment is the");
  ("order and it is the same fact read the other way. A block is made of buildings because");
  ("a building is what a block belongs to.");
  ("The bottom of the ladder answers nothing, and that is the honest answer rather than a");
  ("gap. Nobody is inside a person, so a caller asking what a person is made of has walked");
  ("off the end and should be told so rather than handed a size that does not exist.");
  let rungs = bless_rungs();
  let below = list_index_of_add(rungs, rung, -1);
  let inside = list_get_or_null(rungs, below);
  return inside;
}
