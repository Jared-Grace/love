import { list_size } from "./list_size.mjs";
import { examples_paths } from "./examples_paths.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { examples_comments_none_assert } from "./examples_comments_none_assert.mjs";
export async function examples_comments_none_gate_run() {
  "QA gate: no file in the example corpus carries a comment. Renaming a function rewrites the corpus by the tree, and a tree holds no comments, so one comment anywhere in there is enough to make a rename of any name that file mentions refuse outright.";
  "Without this the cost is paid at the worst moment and by the wrong person: the refusal arrives partway through a rename, naming a file the renamer never chose to touch, and the way out is to edit somebody else's example first. Failing here instead means the comment is found by whoever wrote it, while they still remember what it was for.";
  "A comment on its own line can usually be turned into a statement holding the same words, but not one written inside an object literal, where no statement can stand - those have to be folded into the example's own prose by hand.";
  let paths = await examples_paths();
  let parseds = await list_map_unordered_async(paths, file_js_parse);
  examples_comments_none_assert(parseds);
  ("Says how much it looked at, because a gate that answers nothing cannot be");
  ("told apart from one that did nothing. Both leave the same empty line, and the");
  ("reader is left inferring a pass from the absence of a complaint.");
  let r = {
    files: list_size(paths),
    commented: 0,
  };
  return r;
}
