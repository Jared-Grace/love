import { js_statement_prose_is } from "./js_statement_prose_is.mjs";
import { not } from "./not.mjs";
export function js_statement_prose_not_is(node) {
  "Whether a line is anything other than a paragraph written for a reader, in any of the three shapes this repo writes one in.";
  "The opposite reading, so a body can be narrowed to the lines that are not prose without the caller writing the turn-around itself. It is the complete twin of the string-only opposite beside it, which only ever knew the first of the three shapes.";
  let prose_is = js_statement_prose_is(node);
  let n = not(prose_is);
  return n;
}
