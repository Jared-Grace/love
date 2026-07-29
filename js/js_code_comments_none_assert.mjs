import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_comments_get } from "./js_comments_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function js_code_comments_none_assert(code, f_path) {
  "Refuse to rewrite a file that still carries a comment. Rewriting means parsing and writing the tree back out, and a comment lives nowhere in a tree, so every such rewrite deletes every comment in the file - silently, with the file left looking tidy and nothing to say what was lost.";
  "Refusing is the only honest option here, because the loss cannot be noticed afterwards. A report would not have helped: the comments this replaces were already being counted and reported as left behind when a rewrite deleted all thirty-four of them, since the count went to a summary nobody read and the rewrite went to the disk. A count is not a guard.";
  let comments = js_comments_get(code);
  let count = list_size(comments);
  list_empty_is_assert_json(comments, {
    f_path,
    count,
    hint: text_combine_multiple([
      "this file still has comments, and rewriting it would delete them — run ",
      fn_name("function_comments_migrate"),
      " to turn the ones on their own line into statements, then move any that share a line with code by hand",
    ]),
  });
}
