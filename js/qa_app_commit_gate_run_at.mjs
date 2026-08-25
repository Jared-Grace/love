import { qa_app_commit_gate_run_at_reach } from "./qa_app_commit_gate_run_at_reach.mjs";
import { qa_app_shipped_names } from "./qa_app_shipped_names.mjs";
export async function qa_app_commit_gate_run_at(search, commit) {
  "Whether one app is sound at one commit: every gate that was red there, sorted into the ones that reach what this app ships and the ones that cannot";
  "One app is what gets deployed, and a break in another app cannot travel into this app's bundle - so a whole-repo verdict answers a question nobody asked and holds a ready deploy for work that could never affect it. Measured on one afternoon: five aborts of a prod fix, none of them able to reach the app being shipped.";
  "The whole of the answering moved next door, to a name that takes what the app ships rather than fetching it. What is left here is that one fetch, for the caller asking about a SINGLE commit, who has nowhere better to put it.";
  "A caller walking a RANGE of commits should not come through here. What an app ships is read off the folder as it stands and is the same answer at every commit in the range, so asking here once per commit buys nothing and costs about thirty-two seconds each time - fifteen minutes over a range measured 2026-08-25. Fetch it once and go next door.";
  "The commit is judged once for the whole repo and every app's answer is then a matter of looking, so the second app to ask pays nothing.";
  let reach = await qa_app_shipped_names(search);
  let r = await qa_app_commit_gate_run_at_reach(search, commit, reach);
  return r;
}
