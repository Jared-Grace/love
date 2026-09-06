import { qa_app_commit_shipped_names } from "./qa_app_commit_shipped_names.mjs";
import { qa_app_commit_gate_run_at_reach } from "./qa_app_commit_gate_run_at_reach.mjs";
export async function qa_app_commit_gate_run_at(search, commit) {
  "Whether one app is sound at one commit: every gate that was red there, sorted into the ones that reach what this app ships and the ones that cannot";
  "One app is what gets deployed, and a break in another app cannot travel into this app's bundle - so a whole-repo verdict answers a question nobody asked and holds a ready deploy for work that could never affect it. Measured on one afternoon: five aborts of a prod fix, none of them able to reach the app being shipped.";
  "The whole of the answering moved next door, to a name that takes what the app ships rather than fetching it. What is left here is that one fetch, for the caller asking about a SINGLE commit, who has nowhere better to put it.";
  "The fetch reads the named COMMIT and no longer the folder as it stands. Everything else about a deployment was already frozen per commit - the build, the hashes, the gate verdicts - and this one live read was the hole: with peers committing throughout a walk that takes half an hour, it followed a name whose file a peer had not written yet, threw, and reported the app as broken. Nine deploys died that way and none of them was about the app.";
  "So a caller walking a RANGE of commits now gets a DIFFERENT answer at each one, and that is the point rather than a cost - a commit where the app is torn is a commit the app cannot ship from. It is still about thirty-two seconds each time, so a range caller that has already fetched one reach and means to reuse it should go next door instead.";
  "The commit is judged once for the whole repo and every app's answer is then a matter of looking, so the second app to ask pays nothing.";
  let reach = await qa_app_commit_shipped_names(search, commit);
  let r = await qa_app_commit_gate_run_at_reach(search, commit, reach);
  return r;
}
