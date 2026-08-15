import { git_mirror_refresh } from "./git_mirror_refresh.mjs";
import { git_mirrors_folders } from "./git_mirrors_folders.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function git_mirrors_refresh() {
  "Brings every bare copy on the drive up to date, and does nothing at all when the drive is absent.";
  "This is the step that keeps a backup from being as old as the last time somebody thought about it.";
  "It is a step beside the pushes rather than one more address to push to, and the reason is that a removable drive is not an address. Its absence is an ordinary state, answered where the folder is read; a register of where this repo publishes is a register of the internet, and a drive that comes and goes does not belong in it. A hand-typed push naming several addresses also fails as a whole, which is a second reason not to put one there - though not one the daemon meets, since it was taught to send to each address on its own.";
  let folders = await git_mirrors_folders();
  let refreshed = await list_map_async(folders, git_mirror_refresh);
  return refreshed;
}
