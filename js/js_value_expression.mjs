import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { json_to } from "./json_to.mjs";
export function js_value_expression(value) {
  "A plain value written out as a piece of a program, so something worked out in a program can be put back into one as words on the page.";
  "It is written out and then read back rather than built up part by part. A part built by hand carries the value alone, and what gets printed onto the page is the spelling beside it - so a word built that way comes out with its quotation marks missing and the file no longer loads.";
  "Only what can be written out plainly goes through here. A value holding something that cannot be written out plainly is not a value that could have stood on a page in the first place, so the refusal is the honest answer and not a shortcoming.";
  arguments_assert(arguments, 1);
  let code = json_to(value);
  let expression = js_parse_expression(code);
  return expression;
}
