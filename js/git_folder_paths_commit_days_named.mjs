import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_concat } from "./list_concat.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export async function git_folder_paths_commit_days_named(folder, paths) {
  "For each of the named paths, the day of the newest commit on any branch of this folder's history that touched it.";
  ("The sibling of ",
    fn_name("git_folder_paths_commit_seconds_since"),
    ", bounded by the paths asked about rather than by a stretch of time. The two bounds suit opposite questions: a caller watching for recent work knows the stretch and not the files, and a caller holding a handful of names knows the files and nothing at all about when they were last seen - a path this is asked about may well have left the repo a year ago.");
  ("All branches are looked through, because the paths worth asking this about are ones the present no longer tracks, and a path absent from the current commit may still be reachable only from somewhere else.");
  ("A day rather than a second, because the one thing a reader wants from this is to tell a file that arrived today from one that has been sitting in the history since last year, and a second has to be turned into a day before it can say that.");
  arguments_assert(arguments, 2);
  ("★ NOTHING NAMED MEANS NOTHING ANSWERED, AND THAT IS NOT THE SAME AS LEAVING THE BOUND OFF. GIT TAKES AN EMPTY LIST OF PATHS AS NO BOUND AT ALL AND READS THE WHOLE OF HISTORY FOR EVERY FILE IT EVER HELD, WHICH IS THE COSTLIEST QUESTION THERE IS AND ANSWERS NOTHING THE CALLER ASKED.");
  let none = list_empty_is(paths);
  if (none) {
    let empty = {};
    return empty;
  }
  ("★ THE MARK IS A SLASH BECAUSE A LETTER IS NOT A MARK: GIT NAMES A FILE BY ITS PATH FROM THE TOP OF THE REPO, WHICH NEVER BEGINS WITH A SLASH, SO A SLASH IS THE FIRST CHARACTER NO ANSWERING LINE CAN CARRY. THE SIBLING ASKED FOR C AND THIS REPO HOLDS CLAUDE.MD, SO THAT FILE'S OWN LINE READ AS A COMMIT ANNOUNCING ITSELF AND THE FILE FELL SILENTLY OUT OF THE ANSWER.");
  let asked = ["log", "--all", "--format=/%cs", "--name-only", "--"];
  let words = list_concat(asked, paths);
  let printed = await git_folder_run(folder, words);
  let lines = printed.split("\n");
  ("Each commit announces its own day on a marked line and then lists the files it touched. Git answers newest first, so the first mention of a path is the newest one and every later mention is older.");
  let days = {};
  let commit_day = null;
  for (let line of lines) {
    let marked = text_starts_with(line, "/");
    if (marked) {
      commit_day = text_skip(line, 1);
      continue;
    }
    let named = line in days;
    let blank = text_empty_is(line);
    if (named || blank) {
      continue;
    }
    days[line] = commit_day;
  }
  return days;
}
