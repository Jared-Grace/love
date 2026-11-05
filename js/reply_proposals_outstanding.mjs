import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals_waiting } from "./reply_proposals_waiting.mjs";
import { reply_approved_all } from "./reply_approved_all.mjs";
import { property_get } from "./property_get.mjs";
import { reply_proposal_outstanding } from "./reply_proposal_outstanding.mjs";
import { list_add } from "./list_add.mjs";
export async function reply_proposals_outstanding() {
  arguments_assert(arguments, 0);
  ("Every change to the reply rules still waiting, each with the approvals it still lacks, so a change that did not go in says why.");
  let waiting = await reply_proposals_waiting();
  let approvals = await reply_approved_all();
  let rows = [];
  for (let proposal of waiting) {
    let title = property_get(proposal, "title");
    let outstanding = await reply_proposal_outstanding(proposal, approvals);
    list_add(rows, {
      title,
      outstanding,
    });
  }
  return rows;
}
