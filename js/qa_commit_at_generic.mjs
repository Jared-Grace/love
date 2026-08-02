import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_snapshot_ensure } from "./qa_snapshot_ensure.mjs";
import { qa_snapshot_gate_told } from "./qa_snapshot_gate_told.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function qa_commit_at_generic(commit, known, path, judge) {
  "$plain commit";
  "$plain known";
  "$plain path";
  arguments_assert(arguments, 4);
  ("Answers a question about the commit you name, from a record if the answer is already in it, and otherwise by freezing a copy of that commit, running the gates over it, and writing the answer down.");
  ("Naming the commit is what makes the writing down worth anything. With this many of us committing, the newest commit changes several times while one run finishes, so an answer asked about whatever is newest is almost always an answer nobody has yet - measured, after guessing otherwise.");
  ("Two askers wanted the same remembering and differed only in what they kept, so what they kept is the one thing handed in. Everything around it - looking first, freezing, running, writing back, and saying whether the answer was already there - is the same work twice, and was written twice until this was named.");
  ("The answer is handed back under a plain word rather than under either asker's own, because neither asker's word means anything to the other. Each puts its own name on it on the way out, which is one line and keeps what its own callers already read.");
  let remembered = property_get_or_null(known, commit);
  ("An answer already written down is handed straight back, and one of us paying the couple of minutes is all of us knowing.");
  if (remembered) {
    let r = {
      commit,
      remembered: true,
      kept: remembered,
    };
    return r;
  }
  let folder = await qa_snapshot_ensure(commit);
  let told = await qa_snapshot_gate_told(folder);
  let kept = await judge(told);
  known[commit] = kept;
  await file_overwrite_json(path, known);
  let r2 = {
    commit,
    remembered: false,
    kept,
  };
  return r2;
}
