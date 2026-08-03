import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function hash_object_read_name() {
  "The name of the one function that hands back the address of a page as an object.";
  "Spelled here rather than at the reading that looks for it, so the check that the readings can still find anything at all is asking about the same name the reading uses.";
  arguments_assert(arguments, 0);
  let name = fn_name("html_hash_object_get");
  return name;
}
