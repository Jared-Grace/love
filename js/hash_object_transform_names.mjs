import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function hash_object_transform_names() {
  "The names of the functions that hand the address of a page to a function you wrote, so it can be changed.";
  "That function's first parameter is the address under whatever name it chose, which is one of the ways a reading comes by a name holding an address.";
  arguments_assert(arguments, 0);
  let f_name = fn_name("html_hash_transform");
  let f_name2 = fn_name("html_hash_transform_reload");
  let names = [f_name, f_name2];
  return names;
}
