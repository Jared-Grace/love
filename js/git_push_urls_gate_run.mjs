import { git_push_urls_missing } from "./git_push_urls_missing.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
export async function git_push_urls_gate_run() {
  "Fails when a repository meant to write to more than one place has stopped writing to one of them.";
  "Where a push goes is kept beside a repository on the machine rather than inside it, so it travels with no copy and nothing about the work itself records it. That is the reason it is worth a gate rather than the reason it cannot have one: it can be lost by a fresh copy or by one careless change, and losing it is silent, because every push afterwards succeeds and only one place receives it.";
  "A repository nobody wrote an expectation for answers nothing, so this stays quiet everywhere it has no business speaking - which is what lets a repository holding private work sit beside the others and be swept by everything else exactly as they are.";
  async function each_folder(folder) {
    let missing = await git_push_urls_missing(folder);
    let none = list_empty_is(missing);
    if (none) {
      return null;
    }
    let offender = {
      folder,
      missing,
    };
    return offender;
  }
  let answered = await repos_paths_map_unordered(each_folder);
  let offenders = list_filter_null_not_is(answered);
  list_empty_is_assert_json(offenders, {
    hint: "a repository has stopped writing to an address it is meant to write to - add it back with: git remote set-url --add --push origin <url>",
    offenders,
  });
  let r = {
    offenders: 0,
  };
  return r;
}
