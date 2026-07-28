import { function_path_to_name } from "./function_path_to_name.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { catch_null } from "./catch_null.mjs";
import { path_base } from "./path_base.mjs";
import { equal } from "./equal.mjs";
export function function_path_own_is(f_path) {
  "Whether a file in the functions folder is one of this repo's functions, asked";
  "by taking its name back off it and seeing whether the name leads home again.";
  "The naming law is not restated here. It is already written where a name is";
  "turned into a path - a name may hold no full stop - so asking through that";
  "rather than beside it means the two can never come to disagree, and a change";
  "to the law reaches this on its own.";
  "Saying what a function file IS rather than listing what one is not is what";
  "makes this hold against things nobody thought of. A half-written file left by";
  "a process that died, an editor's swap file, the leavings of a merge - none of";
  "them lead home, and none of them had to be predicted.";
  "The cost of getting it wrong is not a stray name in a list. The name is fed";
  "back through the same law to build a path, and a file that was never there is";
  "then opened - so one leftover in the folder ends every canonicalizing run in";
  "the repo, for everybody, naming a file nobody wrote.";
  let f_name = function_path_to_name(f_path);
  function lambda_home() {
    let home = function_name_to_path_relative(f_name);
    return home;
  }
  ("The law refuses rather than answering, so the refusal is caught and read as a");
  ("no - which is what it is.");
  let led_home = catch_null(lambda_home);
  if (led_home) {
    let base = path_base(f_path);
    let home_base = path_base(led_home);
    let same = equal(base, home_base);
    return same;
  }
  return false;
}
