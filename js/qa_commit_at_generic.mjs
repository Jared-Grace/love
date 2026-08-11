import { file_json_transform_initialize } from "./file_json_transform_initialize.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_snapshot_ensure } from "./qa_snapshot_ensure.mjs";
import { qa_snapshot_gate_told } from "./qa_snapshot_gate_told.mjs";
export async function qa_commit_at_generic(commit, known, path, judge) {
  "$plain commit";
  "$plain known";
  "$plain path";
  arguments_assert(arguments, 4);
  ("The commit is written out in full before anything is looked up or filed under it. Git answers to a shortened name, so naming one here used to file the answer under those few letters while every other answer in the record is listed under the full name - and the readers that walk a range of commits are handed full names by git, so they never met the entry again. That is a quarter of an hour of judging that looks like it worked and cannot afterwards be found; it happened, on the commit this line was written for.");
  let named = await git_commit_full(commit);
  ("Answers a question about the commit you name, from a record if the answer is already in it, and otherwise by freezing a copy of that commit, running the gates over it, and writing the answer down.");
  ("Naming the commit is what makes the writing down worth anything. With this many of us committing, the newest commit changes several times while one run finishes, so an answer asked about whatever is newest is almost always an answer nobody has yet - measured, after guessing otherwise.");
  ("Two askers wanted the same remembering and differed only in what they kept, so what they kept is the one thing handed in. Everything around it - looking first, freezing, running, writing back, and saying whether the answer was already there - is the same work twice, and was written twice until this was named.");
  ("The answer is handed back under a plain word rather than under either asker's own, because neither asker's word means anything to the other. Each puts its own name on it on the way out, which is one line and keeps what its own callers already read.");
  let remembered = property_get_or_null(known, named);
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
  ("The record is read again here, a moment before it is written, rather than the copy taken at the start being handed back. Judging takes about a quarter of an hour and ten of us share the one folder, so that copy is a picture of the record as it stood fifteen minutes ago - and writing it back put every entry written in the meantime out of existence. Two of us judging at once meant the slower one silently erased the faster one's quarter of an hour, and a run of the forgetting command during a judging was undone by it.");
  ("This does not make the writing indivisible and is not meant to. Reading and writing back is still two steps and two of us could still land inside the gap between them; what closes is the gap itself, from fifteen minutes down to the moment it takes to read one small file. Only this run's own commit is added, so nothing else in the record is ever this run's to write.");
  ("The reading and the writing back are one named step rather than two written here, because that step is where the shortness of the gap lives - anything that wants to keep it short should be changing one function and not every place a record is kept.");
  function entry_add(record) {
    record[commit] = kept;
  }
  await file_json_transform_initialize(path, {}, entry_add);
  let r2 = {
    commit,
    remembered: false,
    kept,
  };
  return r2;
}
