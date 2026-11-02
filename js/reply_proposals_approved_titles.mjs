import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals_waiting } from "./reply_proposals_waiting.mjs";
import { reply_approved_all } from "./reply_approved_all.mjs";
import { reply_proposal_approved_is } from "./reply_proposal_approved_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function reply_proposals_approved_titles() {
  arguments_assert(arguments, 0);
  ("The titles of the changes to the reply rules that are still waiting and have every file approved in the wording it has right now.");
  let waiting = await reply_proposals_waiting();
  let approvals = await reply_approved_all();
  let ready = [];
  for (let proposal of waiting) {
    let approved = await reply_proposal_approved_is(proposal, approvals);
    if (approved) {
      let title = property_get(proposal, "title");
      list_add(ready, title);
    }
  }
  return ready;
}
