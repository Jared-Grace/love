import { function_aliases_dead } from "./function_aliases_dead.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { object_filter } from "./object_filter.mjs";
import { data_transform } from "./data_transform.mjs";
import { data_aliases_path } from "./data_aliases_path.mjs";
export async function function_aliases_dead_remove() {
  "takes out every alias key that reaches no function, and finds that set itself rather than being handed it";
  "a rename carries an alias along; a deletion leaves it behind, spelling a word nothing answers to. the human then types two letters and reads an error, which is the only report there has ever been of it, and it arrives in the middle of doing something else.";
  "it is one read and one write on purpose. the keys live in a single file read as a whole, so removing them one at a time means writing that whole file once per key, and every write after the first is a chance to put back what an earlier one took out.";
  "this can only ever take a key away, never point one somewhere new. where the target was renamed rather than deleted the key wanted repointing instead, and that is a judgment about which function the human meant - so it is left to be made by hand, and giving the key back costs one command.";
  let dead = await function_aliases_dead();
  let keys = properties_get(dead);
  function keeping_is(target, key) {
    let kept = list_includes_not(keys, key);
    return kept;
  }
  function lambda(aliases) {
    let kept = object_filter(aliases, keeping_is);
    return kept;
  }
  let d_path = data_aliases_path();
  let v = await data_transform("aliases", {}, lambda, d_path);
  let aliases = properties_get(v);
  let report = { dead, aliases: aliases.length };
  return report;
}
