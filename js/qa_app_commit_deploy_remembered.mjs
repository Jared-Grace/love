import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { qa_app_commit_deploy } from "./qa_app_commit_deploy.mjs";
import { qa_app_commit_deployable_remembered } from "./qa_app_commit_deployable_remembered.mjs";
export async function qa_app_commit_deploy_remembered(search, commit_floor) {
  "$plain search";
  "$plain commit_floor";
  "Sends out one app from the newest commit already judged sound for it, and says so plainly instead when there is no such commit.";
  "This is the two halves of shipping put together, and it is worth one name because they were only ever asked in one order. Finding a commit is no use without sending from it, and sending needs a commit named - so every Claude with a change to ship was going to run both anyway, and the one who forgot the first half would go back to shipping from whatever the working folder happened to hold.";
  "Nothing is judged here and nothing waits. It asks only what somebody has already written down, so it either answers in about half a minute or says there is nothing - which is the honest answer, because the work of judging a commit belongs to whoever is willing to spend fourteen minutes on it rather than to whoever happened to ask.";
  "Finding nothing is not a failure and is not thrown. It means the judged commits descended from your work are all blocked for this app, and what blocked each of them comes back with the answer - so the reply to a refusal is to read it, not to run it again.";
  let found = await qa_app_commit_deployable_remembered(search, commit_floor);
  let chosen = property_get(found, "chosen");
  if (null_is(chosen)) {
    let nothing = {
      app: search,
      deployed: false,
      found,
    };
    return nothing;
  }
  let sent = await qa_app_commit_deploy(search, chosen);
  let r = {
    app: search,
    deployed: true,
    commit: chosen,
    found,
    sent,
  };
  return r;
}
