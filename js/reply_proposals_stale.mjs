import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals } from "./reply_proposals.mjs";
import { property_get } from "./property_get.mjs";
import { function_read } from "./function_read.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { list_add } from "./list_add.mjs";
export async function reply_proposals_stale() {
  arguments_assert(arguments, 0);
  ("Every line a written-down change claims is in the code today which is not there any more.");
  ("★ A PROPOSAL IS READ LONG AFTER IT IS WRITTEN, AND THE CODE MOVES UNDER IT. What makes a change reviewable is that its left-hand side is really what is there now; once that stops being true the reader is comparing a new idea against a description of a function that no longer exists, and there is nothing on the screen to say so. So the lines it says are already there are checked against the file, and the ones it says it would add are not - those are the whole point of it not being there yet.");
  ("The comparing is done on the trimmed line rather than the whole one, because how deeply a line sits is a thing the canonicalizing pass decides and re-decides. A proposal that went stale every time a function was re-indented would be a proposal nobody trusted the staleness of.");
  let proposals = await reply_proposals();
  let stale = [];
  for (let proposal of proposals) {
    let f_name = property_get(proposal, "fn");
    let source = await function_read(f_name);
    let diff = property_get(proposal, "diff");
    for (let line of diff) {
      let added = text_starts_with(line, "+");
      if (added) {
        continue;
      }
      let without_sign = text_slice_from(line, 1);
      let bare = text_trim(without_sign);
      let gone = text_includes_not(source, bare);
      if (gone) {
        let one = {
          fn: f_name,
          title: property_get(proposal, "title"),
          line: bare,
        };
        list_add(stale, one);
      }
    }
  }
  return stale;
}
