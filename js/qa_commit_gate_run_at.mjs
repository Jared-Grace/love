import { property_get } from "./property_get.mjs";
import { qa_commit_verdicts } from "./qa_commit_verdicts.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_snapshot_ensure } from "./qa_snapshot_ensure.mjs";
import { qa_snapshot_gate_told } from "./qa_snapshot_gate_told.mjs";
import { qa_commit_verdicts_path } from "./qa_commit_verdicts_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function qa_commit_gate_run_at(commit) {
  "Judges the commit you name, against a frozen copy of it, and keeps the answer";
  "Naming the commit is what makes the keeping worth anything: with this many of us committing, the newest commit changes several times while one run finishes, so an answer asked for about whatever is newest is almost always an answer nobody has yet - measured, after guessing otherwise";
  "Asked about a commit already judged, it hands the answer straight back, and one of us paying the couple of minutes is all of us knowing";
  let verdicts = await qa_commit_verdicts();
  let known = property_get_or_null(verdicts, commit);
  if (known) {
    let r = {
      commit,
      remembered: true,
      verdict: known,
    };
    return r;
  }
  ("What is kept is the answer and not the hundreds of lines that led to it, because the keeping is shared and committed - the reasons are the same reasons a fresh asking gives again");
  let folder = await qa_snapshot_ensure(commit);
  let told = await qa_snapshot_gate_told(folder);
  let green = property_get(told, "green");
  let failed = property_get(told, "failed");
  let kept = {
    green,
    failed,
  };
  let path = qa_commit_verdicts_path();
  verdicts[commit] = kept;
  await file_overwrite_json(path, verdicts);
  let r2 = {
    commit,
    remembered: false,
    verdict: kept,
  };
  return r2;
}
