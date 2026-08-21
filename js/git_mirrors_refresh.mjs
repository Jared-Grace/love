import { git_mirror_refresh } from "./git_mirror_refresh.mjs";
import { git_mirrors_folders } from "./git_mirrors_folders.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function git_mirrors_refresh() {
  "Brings every bare copy that is there up to date, and does nothing at all when there are none.";
  "This is the step that keeps a copy from being as old as the last time somebody thought about it.";
  "It is a step beside the pushes rather than one more address to push to. A place on this machine's own disk is not an address: a register of where this repo publishes is a register of the internet, and a folder is not on it. A hand-typed push naming several addresses also fails as a whole, which is a second reason not to put one there - though not one the daemon meets, since it was taught to send to each address on its own.";
  "Doing nothing when there are none is what hid the whole thing for months. The copies lived on a removable drive; the drive stopped being used; the reading of a folder that is not there answers an empty set, so every cycle found nothing to bring up to date and said so by saying nothing. The copies are on the disk now, and the emptiness that meant absence then means only that nobody has made one yet - which is a different thing, and is why making them was written down separately rather than left to a hand.";
  let folders = await git_mirrors_folders();
  let refreshed = await list_map_async(folders, git_mirror_refresh);
  return refreshed;
}
