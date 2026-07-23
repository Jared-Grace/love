import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { integer_to } from "./integer_to.mjs";
import { add_1 } from "./add_1.mjs";
import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { list_join } from "./list_join.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function js_block_canonical(sigs, input_names, output_name) {
  "Alpha-renaming-invariant canonical string for a straight-line block of call-declaration signatures";
  "with designated inputs (in order) and one output. Inputs become $0,$1,...; each defined local gets";
  "the next slot after its args are encoded; literals stay literal; the output is appended as its slot.";
  "Two blocks share this string iff they compute the same dataflow up to variable renaming — the basis";
  "of the fold equivalence check.";
  arguments_assert(arguments, 3);
  let map = {};
  let next = 0;
  function register(name) {
    let has = property_exists(map, name);
    if (has) {
      return;
    }
    let slot = list_join_empty(["$", integer_to(next)]);
    property_set(map, name, slot);
    next = add_1(next);
  }
  function canon_arg(token) {
    let has = property_exists(map, token);
    if (has) {
      let slot = property_get(map, token);
      return slot;
    }
    return token;
  }
  each(input_names, register);
  function encode(sig) {
    let callee = property_get(sig, "callee");
    let args = property_get(sig, "args");
    let canon_args = list_map(args, canon_arg);
    let joined = list_join(canon_args, ",");
    let name = property_get(sig, "name");
    register(name);
    let encoded = list_join_empty([callee, "(", joined, ")"]);
    return encoded;
  }
  let encodeds = list_map(sigs, encode);
  let body = list_join(encodeds, ";");
  let out_slot = canon_arg(output_name);
  let full = list_join_empty([body, "=>", out_slot]);
  return full;
}
