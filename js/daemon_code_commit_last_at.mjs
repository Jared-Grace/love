import { daemon_reachable_paths } from "./daemon_reachable_paths.mjs";
import { list_map } from "./list_map.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
export async function daemon_code_commit_last_at(f_name, path_seconds) {
  "The second of the newest commit to touch anything this daemon's code is made of.";
  "Read out of an answer git has already given about every recently committed file at once, rather than asked of git here. One daemon's files are hundreds, and every daemon shares nearly all of them with every other, so asking once for all of them and looking each daemon's own set up costs a fraction of asking six times.";
  "Nothing at all when no file it is made of appears in that answer, which means nothing it is made of has been committed recently enough to matter.";
  let paths = await daemon_reachable_paths(f_name);
  function lambda$path(path) {
    let second = path_seconds[path];
    return second;
  }
  let seconds = list_map(paths, lambda$path);
  let at = list_max_or_null(seconds);
  return at;
}
