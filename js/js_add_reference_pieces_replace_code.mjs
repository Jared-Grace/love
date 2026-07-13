import { list_size_1 } from "./list_size_1.mjs";
import { list_first } from "./list_first.mjs";
import { js_code_join_comma_space } from "./js_code_join_comma_space.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_code_wrap_brackets } from "./js_code_wrap_brackets.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_add_reference_pieces_replace_code(pieces, statement) {
  let s1 = list_size_1(pieces);
  if (s1) {
    let single = list_first(pieces);
    return single;
  }
  let joined = js_code_join_comma_space(pieces);
  if (statement) {
    let sequence = js_code_wrap_parenthesis(joined);
    return sequence;
  }
  let array_code = js_code_wrap_brackets(joined);
  let args = [array_code];
  let call_code = js_code_call_args(text_combine_multiple.name, args);
  return call_code;
}
