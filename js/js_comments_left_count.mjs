import { js_parse } from "./js_parse.mjs";
import { js_comment_migratable_is } from "./js_comment_migratable_is.mjs";
import { js_comments_get } from "./js_comments_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
export function js_comments_left_count(code) {
  "How many comments in a piece of source the migration cannot carry across - the ones sharing a line with code, the block comments, and the ones standing where the language allows no statement at all, such as between the entries of a written-out record. They are counted rather than converted because where such a comment should move is a judgement about what it explains, and getting that wrong silently is worse than leaving it.";
  "Counting them is the point. A migration that reports only what it fixed reads as though the file is now safe, and the next normalize run would delete these without a word. A number beside the file says how much is left for a person, and says it before the loss instead of after.";
  let ast = js_parse(code);
  let comments = js_comments_get(code);
  function left_is(comment) {
    let migratable = js_comment_migratable_is(code, ast, comment);
    let left = not(migratable);
    return left;
  }
  let count = list_filter_size(comments, left_is);
  return count;
}
