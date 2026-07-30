import { git_commits_between } from "./git_commits_between.mjs";
export async function git_commits_back_to(folder, commit_floor) {
  "The commits from the one we are standing on back to the one named, newest first and the named one last. Read-only.";
  "Standing on the newest is the ordinary case and worth its own name, because a caller who wants everything up to now should not have to spell what now is. The general one underneath takes both ends, which is what lets a range be asked about that stops short of the newest - and the newest moves several times while one question is answered here, so a range that excludes it is the only kind that stays still long enough to be asked about twice.";
  let commits = await git_commits_between(folder, "HEAD", commit_floor);
  return commits;
}
