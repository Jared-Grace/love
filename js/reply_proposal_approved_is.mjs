import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposal_outstanding } from "./reply_proposal_outstanding.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function reply_proposal_approved_is(proposal, approvals) {
  arguments_assert(arguments, 2);
  ("Whether every file one change touches has been approved, in the wording it has right now.");
  ("★ ONE FILE NOT APPROVED, OR APPROVED IN AN OLDER WORDING, IS A NO FOR THE WHOLE CHANGE. The change is applied on the strength of this answer and nobody is asked again, so a yes here has to mean that a person read every line that is about to go in.");
  ("A change with lines its file no longer holds is never approved, whatever was stored for it. The screen offers no button for one, and a verdict left over from before the file moved was given for a change that can no longer be drawn.");
  let outstanding = await reply_proposal_outstanding(proposal, approvals);
  let approved = list_empty_is(outstanding);
  return approved;
}
