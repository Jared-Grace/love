import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_functions_paths } from "./repo_love_functions_paths.mjs";
import { functions_files_unparseable_from_paths } from "./functions_files_unparseable_from_paths.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function functions_files_unparseable_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every function file this repo has committed reads in as code.");
  ("A single mistyped character in one committed file takes the whole repo down, and takes it down silently. The index of functions is built by parsing every one of them, so a file that will not parse makes the index unbuildable, and nearly everything here stands on the index: searches, sweeps, the canonicalizing pass, the judging of a commit. All of them die, all with the same message, and the message names a line number in a file it does not name.");
  ("Measured 2026-08-28: one file had been committed with the two characters of an escape typed into the middle of a line where the newline they stand for was meant. That broke the reading step of every canonicalizing run in the repo, for every one of us, and it was found by accident, days later, by somebody whose own unrelated command kept dying.");
  ("Measured against zero, with no record of what was already wrong, because nothing was: the one torn file was put right before this was written, and a file that will not parse is never a fault to be grandfathered - it is a typing mistake with a one-minute fix.");
  ("Only committed files are looked at, and that is the gate's whole difference from the hunt it shares its reading with. A gate is judged inside a frozen copy of one commit, so a neighbour part way through saving a file cannot make this red - which is exactly the case that makes the same question unanswerable in the working folder.");
  ("The files are found from where this code is standing rather than from the repos beside it, because inside that frozen copy there are none.");
  let f_paths = await repo_love_functions_paths();
  let torn = await functions_files_unparseable_from_paths(f_paths);
  for (let entry of torn) {
    let f_path = property_get(entry, "f_path");
    let said = property_get(entry, "said");
    console.log("WILL NOT PARSE  " + f_path + "  " + said);
  }
  let walked = list_size(f_paths);
  let hint =
    "a committed function file will not read in as code, which makes the index of functions unbuildable and kills every command that stands on it - the parser's own words are printed above, beside the file";
  let r = list_empty_is_assert_walked_generic(walked, torn, hint);
  return r;
}
