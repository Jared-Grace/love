import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
export function lock_folder_path(lock_name) {
  "Where a named lock lives on disk. Taking a lock, asking whether one is held, and removing a stale one are three separate functions and all three need this, so it is worked out here once rather than spelled the same way three times.";
  "On the machine's own disk, deliberately, because a lock is not data. It is one process telling the others to wait, it means nothing once every one of them has stopped, and nothing outside this machine ever reads it.";
  "It used to live on the removable drive the human's files are on, along with everything that is real. That drive can be unplugged, and when it was, taking the lock failed before the work under it was even attempted - so no conversation on this machine could commit at all, and the reason it gave named a folder that had nothing to do with committing. Somewhere that cannot go missing is the whole requirement, and the home folder is asked of the machine rather than written down.";
  "Home rather than a folder inside a repo, because it must be the same path for every process here whatever folder each was started in, and because a lock that lands inside a repo is a file somebody's sweep will try to commit.";
  let home = folder_home();
  let folder = ".love_locks";
  let joined = path_join([home, folder, lock_name]);
  return joined;
}
