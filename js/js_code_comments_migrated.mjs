import { js_code_spans_replaced } from "./js_code_spans_replaced.mjs";
import { js_bound_names } from "./js_bound_names.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { js_offset_inside_function_is } from "./js_offset_inside_function_is.mjs";
import { js_comments_get } from "./js_comments_get.mjs";
import { js_comment_own_line_is } from "./js_comment_own_line_is.mjs";
import { js_code_comment_statement_generic } from "./js_code_comment_statement_generic.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
export function js_code_comments_migrated(code, f_names) {
  "The same source with every comment that had its line to itself turned into a statement holding the same words. Normalizing a file parses it and writes the tree back out, and comments live nowhere in a tree, so every run silently deletes them - this converts them first into something a tree can hold.";
  "The text is edited rather than the tree, because the tree is exactly what cannot carry the answer. But which slashes begin a comment is decided by the parser, never by searching the text: two slashes inside a string or a template literal look identical to a comment and rewriting one of those would change what the code does.";
  "a name the file binds for itself is never turned into a reference, and neither is anything in a comment sitting outside every function. Both were learned by breaking things: a comment mentioning a parameter became a call to that parameter, and a comment at the top of a file became a call with nowhere to be hoisted to";
  let ast_before = js_parse(code);
  let bound = js_bound_names(ast_before);
  let free = list_without_multiple(f_names, bound);
  let comments = js_comments_get(code);
  function own_is(comment) {
    let own = js_comment_own_line_is(code, comment);
    return own;
  }
  let own = list_filter(comments, own_is);
  function statement_of(comment) {
    let start = property_get(comment, "start");
    let value = property_get(comment, "value");
    let inside = js_offset_inside_function_is(ast_before, start);
    let usable = inside ? free : [];
    let statement = js_code_comment_statement_generic(value, usable);
    return statement;
  }
  let migrated = js_code_spans_replaced(code, own, statement_of);
  return migrated;
}
