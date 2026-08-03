import { fn_name } from "./fn_name.mjs";
import { function_aliases } from "./function_aliases.mjs";
import { function_aliases_dead } from "./function_aliases_dead.mjs";
import { properties_get } from "./properties_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function function_aliases_dead_gate_run() {
  "gate: every alias key the human types must reach a function that exists";
  "an alias is the second named referrer to a function, next to a standing approval, and it breaks the same way: whoever deletes the function is not the one who typed the key, so nothing tells either of them. the allow rules have been gated for a while and the aliases were not, and the two the first run found had been sitting there long enough that neither target is in the history of this repo at all.";
  "the cost of missing one falls entirely on the human, in the middle of doing something else, which is the reading this is here to stop paying for. clearing them is one command that finds its own set.";
  let aliases = await function_aliases();
  let dead = await function_aliases_dead();
  let keys = properties_get(dead);
  let f_name = fn_name("function_aliases_dead_remove");
  let f_name2 = fn_name("function_alias_change");
  list_empty_is_assert_json(keys, {
    hint: text_combine_multiple([
      "these alias keys name a function nothing answers to, so typing one reaches nothing - take them all out with ",
      f_name,
      ", or, where the target was renamed rather than deleted, point the key at the new name with ",
      f_name2,
    ]),
    dead,
  });
  let all = properties_get(aliases);
  let r = {
    aliases: all.length,
    dead: 0,
  };
  return r;
}
