import { git_mirror_refresh } from "./git_mirror_refresh.mjs";
import { git_mirrors_folders } from "./git_mirrors_folders.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function git_mirrors_refresh() {
  "Brings every bare copy on the drive up to date, and does nothing at all when the drive is absent.";
  "This is the step that keeps a backup from being as old as the last time somebody thought about it. It is called after the pushes rather than as one of them, because the addresses a push is sent to fail as a set: a drive that is unplugged would stop the copies that go to the internet, which is the opposite of what a backup is for.";
  let folders = await git_mirrors_folders();
  let refreshed = await list_map_async(folders, git_mirror_refresh);
  return refreshed;
}
