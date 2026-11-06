import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposal_drawn } from "./reply_proposal_drawn.mjs";
import { property_get } from "./property_get.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function reply_proposal_after_source(proposal) {
  arguments_assert(arguments, 1);
  ("The whole file one change to the reply rules would write: the lines shown for approval with the removed ones left out, carrying the imports the added lines need.");
  ("★ WHAT IS WRITTEN AND WHAT IS TRIED BEFOREHAND ARE ONE TEXT, BECAUSE THEY COME FROM THIS ONE FUNCTION. A change is tried on its own worked messages before anyone says yes to it, and a try run on text worked out a second way could pass while the text that goes in fails.");
  ("★ THE IMPORTS GO IN HERE, NOT AFTER THE FILE IS WRITTEN. The canonicalizing pass takes seconds, and a file written without them could not run for those seconds: the review screen asked to redraw in that gap and showed a 500 over a change that had gone in correctly.");
  let drawn = await reply_proposal_drawn(proposal);
  let lines = property_get(drawn, "lines");
  function kept_is(line) {
    let r = text_starts_with_not(line, "-");
    return r;
  }
  let kept = list_filter(lines, kept_is);
  function unsigned(line) {
    let r = text_slice_from(line, 1);
    return r;
  }
  let after_lines = list_map(kept, unsigned);
  let after = list_join_newline(after_lines);
  let ast = js_parse(after);
  await js_imports_missing_add_all(ast);
  let whole = js_unparse(ast);
  return whole;
}
