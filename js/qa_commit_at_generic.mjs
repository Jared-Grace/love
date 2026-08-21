import { qa_commit_entry_beside_moved } from "./qa_commit_entry_beside_moved.mjs";
import { qa_commit_kept_file } from "./qa_commit_kept_file.mjs";
import { qa_commit_beside_heads } from "./qa_commit_beside_heads.mjs";
import { property_get } from "./property_get.mjs";
import { qa_commit_entry_beside_matching_is } from "./qa_commit_entry_beside_matching_is.mjs";
import { git_commit_full } from "./git_commit_full.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_snapshot_ensure } from "./qa_snapshot_ensure.mjs";
import { qa_snapshot_gate_told } from "./qa_snapshot_gate_told.mjs";
import { not } from "./not.mjs";
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
  ("Which commit each neighbour is standing on is asked before anything is looked up, because it is half of what the answer is an answer about. A run of the gates resolves names by stepping out of this folder and back down into a neighbour, and the sweeps walk the neighbours too, so a commit of this repo alone names only part of what was seen.");
  let beside = await qa_commit_beside_heads();
  let heads = property_get(beside, "heads");
  let remembered = property_get_or_null(known, named);
  ("An answer already written down is handed straight back, and one of us paying the couple of minutes is all of us knowing - but only when it was worked out beside the very same neighbours, which is a question with its own name and its own corpus.");
  let matching = qa_commit_entry_beside_matching_is(remembered, heads);
  ("Which neighbours moved is worked out before the gates are run rather than afterwards, because the answer is about the record we just declined to use and the record is what changes underneath us while a run of the gates goes on. Read after, it would name whatever had moved by then.");
  let moved = qa_commit_entry_beside_moved(remembered, heads);
  if (matching) {
    ("An answer read back out of the record is in the record, so this way out says so too. Every way out of here now answers the same question - is this judging written down where the next asker will find it - and an asker that has to tell which way out it came from before it knows what it was told is an asker that will one day get it wrong.");
    let r = {
      commit: named,
      remembered: true,
      moved,
      filed: true,
      kept: remembered,
    };
    return r;
  }
  let folder = await qa_snapshot_ensure(named);
  let told = await qa_snapshot_gate_told(folder);
  let kept = await judge(told);
  ("A run in which a share of the gates stopped without ever complaining about a gate is handed back and not written down. The share stopped for a reason no gate mentioned - a neighbour part way through saving a file, a module that will not load, a machine with no room left - so most of the questions it was given were never asked, and what the other shares found is a report on part of the repo wearing the name of the whole of it.");
  ("Kept, it would look judged, and a commit that looks judged is never judged again. Whoever asked for this is still handed everything it found, so nothing is hidden from the person at the keyboard; what does not happen is it being left behind for everybody else as though the questions had all been put.");
  let answered = property_get(told, "answered");
  if (not(answered)) {
    let r3 = {
      commit: named,
      remembered: false,
      moved,
      filed: false,
      silent: property_get(beside, "silent"),
      kept,
    };
    return r3;
  }
  ("The writing itself lives one name along, because the whole-repo run somebody types before committing freezes the same copy and asks it the same questions, and the part that must not be written twice is the deciding whether an answer may be filed at all. The reading and the writing back are one named step down there too, because that step is where the shortness of the gap between them lives.");
  let stamped = await qa_commit_kept_file(named, kept, path, heads);
  let filed = property_get(stamped, "filed");
  if (filed) {
    known[named] = kept;
  }
  ("Whether the answer was written down is handed back rather than left to be guessed from the record afterwards. An asker who wanted this remembered and is quietly not getting it should be able to see so, and the neighbours that could not say are named where they were worked out.");
  ("The neighbours that moved are named beside them, because an asker who spent a quarter of an hour here wants to know which one cost it - and being an empty list means the record held nothing about this commit at all, which is a different thing from a record it could not use.");
  let r2 = {
    commit: named,
    remembered: false,
    moved,
    filed,
    silent: property_get(stamped, "silent"),
    kept,
  };
  return r2;
}
