import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { git_log_format_marked } from "./git_log_format_marked.mjs";
import { list_concat } from "./list_concat.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { git_log_marked_paths_firsts_generic } from "./git_log_marked_paths_firsts_generic.mjs";
import { identity } from "./identity.mjs";
export async function git_folder_paths_commit_days_named(folder, paths) {
  "For each of the named paths, the day of the newest commit on any branch of this folder's history that touched it.";
  ("The sibling of ",
    fn_name("git_folder_paths_commit_seconds_since"),
    ", bounded by the paths asked about rather than by a stretch of time. The two bounds suit opposite questions: a caller watching for recent work knows the stretch and not the files, and a caller holding a handful of names knows the files and nothing at all about when they were last seen - a path this is asked about may well have left the repo a year ago.");
  ("All branches are looked through, because the paths worth asking this about are ones the present no longer tracks, and a path absent from the current commit may still be reachable only from somewhere else.");
  ("A day rather than a second, because the one thing a reader wants from this is to tell a file that arrived today from one that has been sitting in the history since last year, and a second has to be turned into a day before it can say that. Git is asked for the day itself and nothing converts it afterwards, which is why what this hands the reading is the one that changes nothing.");
  arguments_assert(arguments, 2);
  ("★ NOTHING NAMED MEANS NOTHING ANSWERED, AND THAT IS NOT THE SAME AS LEAVING THE BOUND OFF. GIT TAKES AN EMPTY LIST OF PATHS AS NO BOUND AT ALL AND READS THE WHOLE OF HISTORY FOR EVERY FILE IT EVER HELD, WHICH IS THE COSTLIEST QUESTION THERE IS AND ANSWERS NOTHING THE CALLER ASKED.");
  let none = list_empty_is(paths);
  if (none) {
    let empty = {};
    return empty;
  }
  ("The path bound and the branches are the whole of what this adds. How git is asked to mark a commit's own line, and how such a stream is read back, are asked of the one place that holds both - which is where the mark's own story is written down, and why it is a slash rather than a letter.");
  let format = git_log_format_marked("%cs");
  let asked = ["log", "--all", format, "--name-only", "--"];
  let words = list_concat(asked, paths);
  let printed = await git_folder_run(folder, words);
  let days = git_log_marked_paths_firsts_generic(printed, identity);
  return days;
}
