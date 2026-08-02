import { property_get } from "./property_get.mjs";
import { qa_commit_verdicts } from "./qa_commit_verdicts.mjs";
import { qa_commit_verdicts_path } from "./qa_commit_verdicts_path.mjs";
import { qa_commit_at_generic } from "./qa_commit_at_generic.mjs";
export async function qa_commit_gate_run_at(commit) {
  "Judges the commit you name, against a frozen copy of it, and keeps the answer";
  "What is kept is the answer and not the hundreds of lines that led to it, because the keeping is shared and committed - the reasons are the same reasons a fresh asking gives again";
  "The remembering itself lives in what this calls, because its neighbour wanted exactly the same remembering and differed only in these few lines. What is left here is which record to look in, and which two words out of a run are the ones worth keeping";
  let verdicts = await qa_commit_verdicts();
  let path = qa_commit_verdicts_path();
  async function judge(told) {
    let green = property_get(told, "green");
    let failed = property_get(told, "failed");
    let kept = {
      green,
      failed,
    };
    return kept;
  }
  let memo = await qa_commit_at_generic(commit, verdicts, path, judge);
  let r = {
    commit,
    remembered: property_get(memo, "remembered"),
    verdict: property_get(memo, "kept"),
  };
  return r;
}
