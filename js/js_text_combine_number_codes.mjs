import { js_text_combine_number_calls } from "./js_text_combine_number_calls.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
export function js_text_combine_number_codes(ast) {
  "Every joining of text to a plain number in this file, written back out as the code it is.";
  "The audit hands these to a reader, and a reader cannot do anything with a piece of parsed code - a call written out is something they can look for in the file and recognise when they get there.";
  let calls = js_text_combine_number_calls(ast);
  let codes = list_map(calls, js_unparse);
  return codes;
}
