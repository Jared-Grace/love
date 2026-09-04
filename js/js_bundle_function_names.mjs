import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export function js_bundle_function_names(bundle_text) {
  "$plain bundle_text";
  "the whole of one built file as it sits on disk. It is writing to look through and nothing that runs.";
  "Every name a built file gives to a function it declares, which is the list of what that file actually carries.";
  "IT READS THE BUILT FILE AND NOT THE SOURCE, and that is the entire reason to have it. Everything else that answers what an app is made of walks the source and is therefore only as good as the walking; this one asks the builder what it put out. Two answers arrived at by different roads can disagree, and a check that cannot disagree is not a check.";
  "SHORTENING LEAVES THE NAMES ALONE. What a build shortens is the names inside a body - the ones a reader picks - while a function's own name is kept, because a stack trace with no names in it is unreadable. Measured on the built picture Bible: six hundred and forty-one of the names found here are files in this repo, and every local beside them had already been shortened to one letter.";
  "A NAME FOUND HERE IS NOT YET A FUNCTION OF THIS REPO. A build declares plenty of its own - the run-of-lines helpers a body was cut into, and whatever a library brought with it - so the caller has to keep only the names the repo answers to. Left unfiltered the answer is about a third longer and every extra reads as a fault.";
  arguments_assert(arguments, 1);
  let pattern = new RegExp(
    "function\\s+([A-Za-z_$][A-Za-z0-9_$]*)\\s*\\(",
    "g",
  );
  let names = [];
  let found = pattern.exec(bundle_text);
  while (found) {
    let name = found[1];
    list_add(names, name);
    found = pattern.exec(bundle_text);
  }
  let unique = list_unique(names);
  return unique;
}
