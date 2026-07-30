import { qa_app_commit_deployable_generic } from "./qa_app_commit_deployable_generic.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
export async function qa_app_commit_deployable(search, commit_floor) {
  "The newest commit this app can be shipped from, going no further back than the one named. Read-only - it answers which commit, and ships nothing.";
  "Looking from wherever we are standing is the ordinary case and worth its own name, because a caller who means everything up to now should not have to spell what now is. The general one underneath takes both ends of the range instead, which is what lets a question be asked twice about a range that has stopped moving.";
  "Where we are standing is read here and handed over as a name rather than left for the general one to resolve, so the range that gets walked is the one that was true when the asking began. Ten of us commit to this one branch, and a range whose newer end were re-read further down could quietly grow between two readings of it.";
  let head = await git_head_commit();
  let r = await qa_app_commit_deployable_generic(search, head, commit_floor);
  return r;
}
