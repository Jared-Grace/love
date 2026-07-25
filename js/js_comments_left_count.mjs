import { js_comments_get } from "./js_comments_get.mjs";
import { js_comment_own_line_is } from "./js_comment_own_line_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
export function js_comments_left_count(code) {
  "How many comments in a piece of source the migration cannot carry across - the ones sharing a line with code, and the block comments. They are counted rather than converted because where such a comment should move is a judgement about what it explains, and getting that wrong silently is worse than leaving it.";
  "Counting them is the point. A migration that reports only what it fixed reads as though the file is now safe, and the next normalize run would delete these without a word. A number beside the file says how much is left for a person, and says it before the loss instead of after.";
  let comments = js_comments_get(code);
  function left_is(comment) {
    let own = js_comment_own_line_is(code, comment);
    let left = not(own);
    return left;
  }
  let left = list_filter(comments, left_is);
  let count = list_size(left);
  return count;
}
