import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
import { property_set_new_fn } from "../../../love/public/src/property_set_new_fn.mjs";
import { command_line_generic_code_ignore } from "../../../love/public/src/command_line_generic_code_ignore.mjs";
export async function command_line_code_ignore(value, command) {
  let fn = command_line_generic_code_ignore;
  let object = property_set_new_fn(fn, value);
  let r = await command_line_generic(command, object);
  return r;
}
