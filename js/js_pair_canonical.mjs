import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { integer_to } from "./integer_to.mjs";
import { add_1 } from "./add_1.mjs";
import { list_map } from "./list_map.mjs";
import { list_join } from "./list_join.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function js_pair_canonical(sig, sig2) {
  "Alpha-renaming-invariant key for an ordered pair of call-declaration signatures: every token is";
  "slotted by first appearance ($0,$1,..), the first statement's defined name registered after its args";
  "so the second statement's use of it aligns. Two pairs share this key iff they are the same two calls";
  "wired the same way, regardless of variable names — the basis for mining recurring pairs (a constant";
  "and a variable both become a slot, so pairs differing only in a literal merge, which is fine for a";
  "make-this-a-fn recommender).";
  arguments_assert(arguments, 2);
  let map = {};
  let next = 0;
  function slot(token) {
    let has = property_exists(map, token);
    if (has) {
      let existing = property_get(map, token);
      return existing;
    }
    let i = integer_to(next);
    let fresh = list_join_empty(["$", i]);
    property_set(map, token, fresh);
    next = add_1(next);
    return fresh;
  }
  let callee = property_get(sig, "callee");
  let args = property_get(sig, "args");
  let slotted = list_map(args, slot);
  let name = property_get(sig, "name");
  slot(name);
  let callee2 = property_get(sig2, "callee");
  let args2 = property_get(sig2, "args");
  let slotted2 = list_map(args2, slot);
  let joined = list_join(slotted, ",");
  let joined2 = list_join(slotted2, ",");
  let key = list_join_empty([
    callee,
    "(",
    joined,
    ");",
    callee2,
    "(",
    joined2,
    ")",
  ]);
  return key;
}
