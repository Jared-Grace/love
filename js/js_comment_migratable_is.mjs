import { js_comment_own_line_is } from "./js_comment_own_line_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_offset_statement_position_is } from "./js_offset_statement_position_is.mjs";
import { not } from "./not.mjs";
export function js_comment_migratable_is(code, ast, comment) {
  "Whether a comment can be turned into a statement holding the same words, standing where it already stands. Two things have to be true at once and they are easy to mistake for one: the comment must have its line to itself, and a statement must be allowed where that line is.";
  "Both halves are asked in one place because two callers need the same answer and would fail in opposite directions if they drifted. The one that rewrites would write a statement where none can stand, which does not parse; the one that counts what is left behind would report nothing left, which reads as a file that is safe to normalize and is how the comments get deleted.";
  let own = js_comment_own_line_is(code, comment);
  if (not(own)) {
    return false;
  }
  let start = property_get(comment, "start");
  let position = js_offset_statement_position_is(ast, start);
  return position;
}
