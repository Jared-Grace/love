import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function hash_object_made_name() {
  "The name of the one function that turns an object built up field by field into the address of a page.";
  "This is what makes such an object an address at all. Nothing before that last line says what it was being built for, so a reading of published words has to know this name to see that every field written into it was written into somebody's link.";
  arguments_assert(arguments, 0);
  let name = fn_name("hash_to_url");
  return name;
}
