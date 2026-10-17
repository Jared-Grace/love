import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { js_value_names } from "./js_value_names.mjs";
export function js_value_name_built_in_is(values, name) {
  arguments_assert(arguments, 2);
  ("whether name, in a line whose names hold values, is one JavaScript gives a value itself rather than one the program does");
  ("A name the program holds comes first, so a program that gave undefined a value of its own would be read as it says. Not picked: always reading the built-in value, which would make that program read wrong");
  if (property_exists(values, name)) {
    return false;
  }
  let built_in = js_value_names();
  let is = property_exists(built_in, name);
  return is;
}
