import { and } from "./and.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { git_paths_safe_is } from "./git_paths_safe_is.mjs";
import { git_ac_call_repos_files } from "./git_ac_call_repos_files.mjs";
import { git_ac_call_repos } from "./git_ac_call_repos.mjs";
export async function git_ac_call_repos_files_or_all(f_name, args, files) {
  "Commits the named files when there are some, and everything otherwise.";
  "Nothing written means the change came from a hand rather than from a command,";
  "and a hand leaves no note — so sweeping is not a failure there, it is the only";
  "way that change gets committed at all. The plain fallback also covers the case";
  "where a path could not travel safely, which is rare enough that giving up";
  "precision beats giving up the file.";
  let some = list_empty_not_is(files);
  let safe = git_paths_safe_is(files);
  let targeted = and(some, safe);
  if (targeted) {
    let repos = await git_ac_call_repos_files(f_name, args, files);
    let named = {
      swept: false,
      repos,
    };
    return named;
  }
  let repos = await git_ac_call_repos(f_name, args);
  let all = {
    swept: true,
    repos,
  };
  return all;
}
