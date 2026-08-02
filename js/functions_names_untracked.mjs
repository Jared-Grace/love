import { catch_null_async } from "./catch_null_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { git_files_untracked_folder } from "./git_files_untracked_folder.mjs";
import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
import { list_squash } from "./list_squash.mjs";
import { list_filter } from "./list_filter.mjs";
import { function_path_own_is } from "./function_path_own_is.mjs";
import { list_map } from "./list_map.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
export async function functions_names_untracked() {
  "The function names whose file no repo has recorded yet - somebody part way through writing one, rather than something this repo carries.";
  "Everybody works in the one folder at the same time, so a sweep that reads the folder reads other people's half-finished sentences along with the repo's own. For most questions that is right: a name left unbound in a file being written is genuinely unbound. For a question about two files agreeing with each other it is not, because the second half of the work lands seconds after the first, and a check that fired in that gap would be red for everyone every time anybody started a piece of work.";
  "What separates the two is the commit, which is the only thing here that says a piece of work is finished and offered. So a name git has never seen is passed over, and the same name is asked about in earnest the moment its author commits it.";
  "A folder alongside the repos that is not a repo of its own is dropped rather than carried as a blank, the same way the commit does it. There is one today, and asking git about it stops the whole reading rather than costing one folder.";
  "Swallowing that refusal is safe here in the one direction that matters. What comes back is subtracted from what a check complains about, so a reading that failed altogether excuses nobody and makes every check that uses it stricter. It cannot go quiet.";
  async function lambda(folder) {
    async function asked() {
      let paths = await git_files_untracked_folder(folder);
      return paths;
    }
    let r = await catch_null_async(asked);
    return r;
  }
  let per_repo = await repos_paths_map_unordered(lambda);
  let real = list_filter_null_not_is(per_repo);
  let paths = list_squash(real);
  let own = list_filter(paths, function_path_own_is);
  let f_names = list_map(own, function_path_to_name);
  return f_names;
}
