import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function git_mirror_refresh(folder) {
  "Brings one bare copy up to date with the repository it was cloned from, and answers the commit it stands on afterwards.";
  "A bare copy made by cloning with the mirror option already knows where it came from and already knows to take every reference, including ones that moved somewhere a plain fetch would refuse to follow. So the copy pulls, and the repository it copies is never asked to push. That direction is the whole safety of it: a drive that is not there fails on its own and cannot take a push to the internet down with it.";
  "What it answers is the commit the copy stands on afterwards, not what git printed. git prints its progress where a caller does not read it, so the printed answer is the empty text whether the copy moved or was never touched at all, and an empty answer that means both is the shape a total failure hides inside. The commit is checked against the repository it copies and settles it.";
  await git_folder_run(folder, ["remote", "update", "--prune"]);
  let commit = await git_folder_head_commit(folder);
  let refreshed = {
    folder,
    commit,
  };
  return refreshed;
}
