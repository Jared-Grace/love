import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals_waiting } from "./reply_proposals_waiting.mjs";
import { property_get } from "./property_get.mjs";
import { reply_proposal_cases_wrong } from "./reply_proposal_cases_wrong.mjs";
import { list_add } from "./list_add.mjs";
export async function reply_proposals_cases_wrong() {
  arguments_assert(arguments, 0);
  ("Every worked message of a waiting change to the reply rules whose answer, as the change claims it, is not what the rules would answer once the change went in.");
  ("Only waiting changes are asked. Once a change is in, its worked messages that came from real ones are copied into the corpus and checked there, and the made-up ones describe the rules as they stood that day - later changes are allowed to move them.");
  let waiting = await reply_proposals_waiting();
  let wrong = [];
  for (let proposal of waiting) {
    let title = property_get(proposal, "title");
    let results = await reply_proposal_cases_wrong(title);
    for (let one of results) {
      list_add(wrong, {
        title,
        ...one,
      });
    }
  }
  return wrong;
}
