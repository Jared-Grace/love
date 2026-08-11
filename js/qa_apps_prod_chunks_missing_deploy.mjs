import { ai_git_noted } from "./ai_git_noted.mjs";
import { apps_prod_chunks_missing } from "./apps_prod_chunks_missing.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { property_get } from "./property_get.mjs";
import { qa_app_commit_deploy } from "./qa_app_commit_deploy.mjs";
export async function qa_apps_prod_chunks_missing_deploy(commit) {
  "$plain commit";
  "Sends out afresh every app that would send for an extra script of its own and not find it, building each out of the one commit you name, and asks again afterwards whether any is still in that state.";
  "Which apps those are is worked out here rather than handed in. A list typed by whoever ran this would be a list of what was true when they wrote it down, and one that quietly stopped matching would leave an app broken while reporting that everything asked for was done.";
  "They go one after another rather than all at once. Sending is held by one lock and every one of them writes into the same folder, so running them together would only be a queue with the waiting hidden.";
  "Each is sent and written down before the next begins, so a run that stops halfway leaves the ones already sent properly sent and properly recorded, rather than leaving all of them half done.";
  "Anything already noted as changed is filed under its own bare name first, so the first app sent does not put somebody else's unfinished work out under its name.";
  "Asking again at the end is the proof. What comes back is not what this tried to do but what is still wrong, so an answer of nothing is the only thing that reads as finished.";
  await ai_git_noted();
  let faulty = await apps_prod_chunks_missing();
  let sent = [];
  for (let r of faulty) {
    let app_name = property_get(r, "app_name");
    let one = await function_call_commit(qa_app_commit_deploy, [
      app_name,
      commit,
    ]);
    sent.push(one);
  }
  let remaining = await apps_prod_chunks_missing();
  let result = {
    sent,
    remaining,
  };
  return result;
}
