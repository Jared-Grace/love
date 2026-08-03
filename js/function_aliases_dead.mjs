import { function_aliases } from "./function_aliases.mjs";
import { functions_names } from "./functions_names.mjs";
import { object_filter } from "./object_filter.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function function_aliases_dead() {
  "every alias key whose target names no function, so typing it at the keyboard reaches nothing";
  "an alias is the human's shorthand and a rename carries it along, but a deletion does not: the key is left spelling a word nothing answers to, and the only report of that is the human typing two letters and reading an error. two are like that today, and neither was found by anything but this question being asked.";
  "a key pointing at another key counts as dead too, because unaliasing happens once and not in a chain - one of the two is exactly that, a key whose target is itself a key, so it resolves to a word that is an alias rather than to a function.";
  let aliases = await function_aliases();
  let live = await functions_names();
  function dead_is(target) {
    let gone = list_includes_not(live, target);
    return gone;
  }
  let dead = object_filter(aliases, dead_is);
  return dead;
}
