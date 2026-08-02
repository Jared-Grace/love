import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function storage_browser_direct_hint(lead) {
  "The complaint made about a file that speaks straight to one of the browser's own stores, given the opening words that differ between the two places it is made.";
  "The gate is refusing a file that was just written; the rewrite of the record is refusing a change that would bless one. So they open differently and there is nothing to share there. But both end the same way - by naming the one place where speaking to the browser on purpose is written down, so that somebody whose file really is that can go and put it there. That ending was written out twice, and a sentence written twice is a sentence that can drift.";
  arguments_assert(arguments, 1);
  let f_name = fn_name("storage_browser_doors");
  let r = text_combine_multiple([
    lead,
    f_name,
    " where the reason can be read",
  ]);
  return r;
}
