import { not } from "./not.mjs";
import { git_path_safe_is } from "./git_path_safe_is.mjs";
export function git_paths_safe_is(paths) {
  "One unsafe path spoils the whole set, because they travel to git as a single";
  "line and a path that splits in two takes its neighbours' meaning with it.";
  for (let f_path of paths) {
    let safe = git_path_safe_is(f_path);
    let unsafe = not(safe);
    if (unsafe) {
      let no = false;
      return no;
    }
  }
  let yes = true;
  return yes;
}
