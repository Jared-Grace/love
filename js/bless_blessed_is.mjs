import { arguments_assert } from "./arguments_assert.mjs";
import { set_includes } from "./set_includes.mjs";
import { bless_blessed_key } from "./bless_blessed_key.mjs";
export function bless_blessed_is(blessed, rung, place) {
  arguments_assert(arguments, 3);
  ("Whether this exact place, at this exact rung, has been prayed for by name.");
  ("A narrow question on purpose. It does not ask whether the place was covered by a larger");
  ("prayer from above, and it does not ask whether everything inside it has been done from");
  ("below. Both of those are worth knowing and both are asked elsewhere; keeping this one");
  ("literal is what lets the others be built out of it without arguing with it.");
  let key = bless_blessed_key(rung, place);
  let is = set_includes(blessed, key);
  return is;
}
