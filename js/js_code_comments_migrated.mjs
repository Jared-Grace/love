import { js_comments_get } from "./js_comments_get.mjs";
import { js_comment_own_line_is } from "./js_comment_own_line_is.mjs";
import { js_code_comment_statement_generic } from "./js_code_comment_statement_generic.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_size } from "./text_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_parse } from "./js_parse.mjs";
export function js_code_comments_migrated(code, f_names) {
  "The same source with every comment that had its line to itself turned into a statement holding the same words. Normalizing a file parses it and writes the tree back out, and comments live nowhere in a tree, so every run silently deletes them - this converts them first into something a tree can hold.";
  "The text is edited rather than the tree, because the tree is exactly what cannot carry the answer. But which slashes begin a comment is decided by the parser, never by searching the text: two slashes inside a string or a template literal look identical to a comment and rewriting one of those would change what the code does.";
  let comments = js_comments_get(code);
  function own_is(comment) {
    let own = js_comment_own_line_is(code, comment);
    return own;
  }
  let own = list_filter(comments, own_is);
  let pieces = [];
  let cursor = 0;
  function lambda(comment) {
    let start = property_get(comment, "start");
    let end = property_get(comment, "end");
    let value = property_get(comment, "value");
    let before = text_slice(code, cursor, start);
    list_add(pieces, before);
    let statement = js_code_comment_statement_generic(value, f_names);
    list_add(pieces, statement);
    cursor = end;
  }
  each(own, lambda);
  let size = text_size(code);
  let rest = text_slice(code, cursor, size);
  list_add(pieces, rest);
  let migrated = text_combine_multiple(pieces);
  ("the result is parsed before it is handed back, so that a file this cannot handle is refused loudly instead of saved broken. A comment can sit on its own line and still be somewhere a statement may not go - between an assignment and the value being assigned, for one - and there the swap produces something that is no longer JavaScript. Parsing catches every such case without anyone having to think of them in advance");
  js_parse(migrated);
  return migrated;
}
