import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals } from "./reply_proposals.mjs";
import { property_get } from "./property_get.mjs";
import { function_read } from "./function_read.mjs";
import { reply_proposal_diff_whole } from "./reply_proposal_diff_whole.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export async function reply_proposals_unplaced() {
  arguments_assert(arguments, 0);
  ("Every written-down change that can no longer be laid over the file it lands in, and the lines of it that would be lost.");
  ("★ IT ASKS A STRONGER QUESTION THAN WHETHER THE LINES ARE STILL THERE. Its neighbour asks whether each line the change quotes can be found in the file anywhere; this asks whether they can all be found IN THE ORDER THE CHANGE PUTS THEM. A line that moved above another one is still in the file and no longer means the same thing, and only the order catches that.");
  ("It exists because the drawing is generous by design: a line that cannot be placed is set aside rather than thrown, so the rest of the change still draws. That is right on a phone and wrong as a silence, so the setting-aside is asked about here instead of being noticed by nobody.");
  let proposals = await reply_proposals();
  let missed = [];
  for (let proposal of proposals) {
    let f_name = property_get(proposal, "fn");
    let diff = property_get(proposal, "diff");
    let source = await function_read(f_name);
    let whole = reply_proposal_diff_whole(source, diff);
    let unplaced = property_get(whole, "unplaced");
    let none = list_empty_is(unplaced);
    if (none) {
      continue;
    }
    let one = {
      fn: f_name,
      unplaced,
    };
    list_add(missed, one);
  }
  return missed;
}
