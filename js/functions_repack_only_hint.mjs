import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function functions_repack_only_hint(lead) {
  "The complaint made about a function whose whole product is a record it took apart and put back together, given the opening words that differ between the two places it is made.";
  "The gate is refusing a function that was just written; the rewrite of the record is refusing a change that would bless one. So they open differently and there is nothing to share there. But both end the same way - by naming the one place where a repack on purpose is written down, so that somebody whose function really is that can go and put it there. That ending written out twice is a sentence that can drift.";
  arguments_assert(arguments, 1);
  let f_name = fn_name("functions_repack_only_deliberate");
  let r = text_combine_multiple([
    lead,
    f_name,
    " where the reason can be read",
  ]);
  return r;
}
