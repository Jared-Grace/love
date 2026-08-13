import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_is } from "./list_is.mjs";
export function object_is(value) {
  "Whether a value is a plain object of named properties - not a list, and not nothing.";
  "NULL and LISTS both answer object when asked their type, so both have to be subtracted by hand. Somebody asking this is about to read properties by name, and either of those would be let through and then answer undefined to every one of them.";
  let o = equal(typeof value, "object");
  let nn = not_equal(value, null);
  let li = list_is(value);
  let r = o && nn && not(li);
  return r;
}
