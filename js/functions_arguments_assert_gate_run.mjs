import { arguments_assert } from "./arguments_assert.mjs";
import { functions_arguments_assert_stale } from "./functions_arguments_assert_stale.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_arguments_assert_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: the line counting a function's arguments must say the number of names the function takes.");
  ("A function where the two disagree is broken outright, and quietly. Every correct call throws, and what it throws says the caller handed over the wrong number - so the first reader sent to look goes to the calling file, where nothing is wrong. Until something calls it, nothing at all shows.");
  ("They come apart in one way only. A command adds a name to the list or takes one away; the line at the top is written once when the function is first made and no command has ever gone back to it. So this holds the commands to what the repo already says about itself, that a function takes exactly the arguments it names.");
  ("Held at none rather than against a record of what was already here, because the sweep found none. There is nothing to grandfather and so nothing to argue about later - the first one to appear is the one that just broke.");
  ("The repair is by hand and it is one number. Whichever of the two is right, the other is a typing job, and the reading says both so nobody has to open the file to find out which.");
  let offenders = await functions_arguments_assert_stale();
  list_empty_is_assert_json(offenders, {
    hint: "the line counting arguments says a different number from the names the function takes, so every correct call to it throws - set the number to the count of names",
    offenders,
  });
  let looked = list_size(offenders);
  let r = {
    stale: looked,
  };
  return r;
}
