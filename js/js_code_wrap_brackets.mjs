import { text_wrap_brackets } from "./text_wrap_brackets.mjs";
export function js_code_wrap_brackets(inside) {
  "A piece of JS code with square brackets round it - an index, or a property read by name.";
  "The wrapping itself is not a thing about JS, so it is done by the text sibling and only NAMED here, where the callers are writing code and want to say so.";
  let code = text_wrap_brackets(inside);
  return code;
}
