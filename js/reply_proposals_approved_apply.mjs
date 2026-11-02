import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals_approved_titles } from "./reply_proposals_approved_titles.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { reply_proposal_apply } from "./reply_proposal_apply.mjs";
import { list_add } from "./list_add.mjs";
export async function reply_proposals_approved_apply() {
  arguments_assert(arguments, 0);
  ("Puts into the code every change to the reply rules whose files are all approved, and answers with the titles of the ones it put in.");
  ("★ IT FINDS ITS OWN SET RATHER THAN BEING TOLD WHICH CHANGE WAS JUST FINISHED. The review screen calls this after every approval and every time it opens, so a change whose last file was approved on a visit that was cut off still goes in on the next one, and nothing depends on knowing which tap was the last.");
  ("Each change is committed as it lands, under its own title, so the history says which change went in and not merely that something did. Anything already noted and uncommitted is committed first, so the first change cannot carry somebody else's files under its name.");
  ("★ IT ASKS AGAIN JUST BEFORE EACH CHANGE, BECAUSE TWO APPROVALS PRESSED CLOSE TOGETHER RUN THIS TWICE AT ONCE. The commit before the loop takes seconds, so the second run used to reach a change the first had just written and throw at the person who pressed the button, over a change that had gone in correctly. A change that has stopped being ready is simply not this run's to put in. The window between this asking and the refusal inside the apply is narrowed and not closed, and the refusal stays because it is what keeps an unapproved line out.");
  let ready = await reply_proposals_approved_titles();
  let none = list_empty_is(ready);
  if (none) {
    return ready;
  }
  await ai_git_noted();
  let applied = [];
  for (let title of ready) {
    let now = await reply_proposals_approved_titles();
    let gone = list_includes_not(now, title);
    if (gone) {
      continue;
    }
    await function_call_commit(reply_proposal_apply, [title]);
    list_add(applied, title);
  }
  return applied;
}
