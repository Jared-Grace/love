import { arguments_assert } from "./arguments_assert.mjs";
import { set_add } from "./set_add.mjs";
import { bless_blessed_key } from "./bless_blessed_key.mjs";
export function bless_blessed_add(blessed, rung, place) {
  arguments_assert(arguments, 3);
  ("Remember that this place, at this rung, has been prayed for.");
  ("Only the place named by the prayer is written down, and nothing underneath it is. A");
  ("blessing on a block covers everyone on it - but that is a fact the block already tells");
  ("anybody who asks, so writing it out person by person would be storing an answer that");
  ("can be worked out, and storing it in a form that can go stale.");
  let key = bless_blessed_key(rung, place);
  set_add(blessed, key);
}
