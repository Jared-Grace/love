import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_program_trace_line(node, code) {
  arguments_assert(arguments, 2);
  ("which line of the program a node begins on, counting from 0");
  let start = property_get(node, "start");
  let before = text_slice(code, 0, start);
  let lines = text_split_newline(before);
  let left = list_size(lines);
  let index = subtract(left, 1);
  return index;
}
