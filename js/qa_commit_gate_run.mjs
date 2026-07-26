import { git_head_commit } from "./git_head_commit.mjs";
import { qa_commit_verdicts } from "./qa_commit_verdicts.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_snapshot_ensure } from "./qa_snapshot_ensure.mjs";
import { qa_commit_gate_told } from "./qa_commit_gate_told.mjs";
import { qa_commit_verdicts_path } from "./qa_commit_verdicts_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function qa_commit_gate_run() {
  "Judges the commit we are on, against a frozen copy of it, and keeps the answer";
  "The plain gate reads the working folder, which several of us are editing while it reads - so it answers about a moment nobody can return to, and a complaint from it may be nothing more than somebody saving a file. This one asks the same questions of a copy that cannot change while it is being read, so the answer belongs to the commit and means the same thing tomorrow";
  "An answer already recorded is simply given back. That is the whole saving: one of us pays the couple of minutes and the rest of us read it, instead of each of us paying it over for the same commit";
  "The three questions that are not about the files are left out, since a copy cannot answer them and their answer would not keep";
  let commit = await git_head_commit();
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
  let folder = await qa_snapshot_ensure(commit);
  let told = await qa_commit_gate_told(folder);
  let path = qa_commit_verdicts_path();
  verdicts[commit] = told;
  await file_overwrite_json(path, verdicts);
  let r2 = {
    commit,
    remembered: false,
    verdict: told,
  };
  return r2;
}
