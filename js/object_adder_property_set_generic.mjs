import { arguments_assert } from "./arguments_assert.mjs";
import { object_adder_generic } from "./object_adder_generic.mjs";
import { property_get } from "./property_get.mjs";
export function object_adder_property_set_generic(fn_property_set, lambda$oad) {
  arguments_assert(arguments, 2);
  ("Hand a caller something to add to, let it add, and give back what it built -");
  ("with how a key already taken is treated left to the caller.");
  ("Its two callers differ in that one thing and nothing else: one refuses a key");
  ("twice, the other lets the later value stand. Everything after choosing was");
  ("written out at both, which is four lines of unpacking around the one line that");
  ("actually differs.");
  ("The awaiting sibling is deliberately not folded in here. Its lambda is waited");
  ("on, and a caller that does not need waiting must not be made to.");
  let v = object_adder_generic(fn_property_set);
  let result = property_get(v, "result");
  let oa = property_get(v, "oa");
  lambda$oad(oa);
  return result;
}
