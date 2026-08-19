import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export function property_in_list_not(object, property_name, list) {
  "Whether what is held under this name is none of the things in this list.";
  "The refusal half of its twin, and it takes its arguments in the same order for the one reason that matters: the two read alike at a call site, so a reader who has the order of one has the order of both. It arrived here as a lambda lifted out of a gate and kept that gate's name for a while, which said nothing about what it does and read as a stranger everywhere it was called.";
  arguments_assert(arguments, 3);
  let value = property_get(object, property_name);
  let outside = list_includes_not(list, value);
  return outside;
}
