import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function command_line_generic_parse_command(
  command_text,
  TypeError,
  Error,
) {
  arguments_assert(arguments, 3);
  if (not_equal(typeof command_text, "string")) {
    throw new TypeError("command must be a string");
  }
  if (/[|&;`$()]/.test(command_text)) {
    let f_name = fn_name("command_line_generic");
    let combined = text_combine_multiple([
      "Shell operators are not allowed in ",
      f_name,
    ]);
    throw new Error(combined);
  }
  let args_parsed = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; less_than(i, command_text.length); i++) {
    let c = command_text[i];
    if (equal(c, '"')) {
      inQuotes = not(inQuotes);
      continue;
    }
    if (equal(c, " ") && not(inQuotes)) {
      if (current.length) {
        args_parsed.push(current);
        current = "";
      }
      continue;
    }
    current += c;
  }
  if (current.length) {
    args_parsed.push(current);
  }
  let r = {
    cmd: args_parsed.shift(),
    args: args_parsed,
  };
  return r;
}
