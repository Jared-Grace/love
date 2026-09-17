import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals_waiting } from "./reply_proposals_waiting.mjs";
import { reply_approved_all } from "./reply_approved_all.mjs";
import { reply_proposal_approved_is } from "./reply_proposal_approved_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { reply_proposal_apply } from "./reply_proposal_apply.mjs";
export async function reply_proposals_approved_apply() {
  arguments_assert(arguments, 0);
  ("Puts into the code every change to the reply rules whose files are all approved, and answers with the titles of the ones it put in.");
  ("★ IT FINDS ITS OWN SET RATHER THAN BEING TOLD WHICH CHANGE WAS JUST FINISHED. The review screen calls this after every approval and every time it opens, so a change whose last file was approved on a visit that was cut off still goes in on the next one, and nothing depends on knowing which tap was the last.");
  ("Each change is committed as it lands, under its own title, so the history says which change went in and not merely that something did. Anything already noted and uncommitted is committed first, so the first change cannot carry somebody else's files under its name.");
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
  let none = list_empty_is(ready);
  if (none) {
    return ready;
  }
  await ai_git_noted();
  for (let title of ready) {
    await function_call_commit(reply_proposal_apply, [title]);
  }
  return ready;
}
