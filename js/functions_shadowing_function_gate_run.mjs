import { list_map_property } from "./list_map_property.mjs";
import { list_map } from "./list_map.mjs";
import { list_join } from "./list_join.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_shadowing_function } from "./functions_shadowing_function.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { each } from "./each.mjs";
import { log_console } from "./log_console.mjs";
export async function functions_shadowing_function_gate_run() {
  "Gate: no local may wear the name of a function this repo already has";
  "This ratchets against ZERO rather than against a baseline - all twenty-five were cleared on 2026-07-28, so there is nothing left to grandfather and letting one back in would be letting the next call written in that file land on a local";
  "The wider cousin of the operator gate beside it: same failure, same fix, and only the set of names differs";
  "Only the function that binds the name is accused. The function whose name is being hidden did nothing, and it is by definition a name this repo already answers to - so spelling it in the complaint read as an accusation against it, and against every app that ships it.";
  "The advice is not an accusation either, and written as a plain sentence it named the repair command as though it were at fault. Both travel in the hint now, where the reader of a complaint already knows not to look for offenders, and the complaint itself carries nothing but the offenders.";
  let offenders = await functions_shadowing_function();
  let bound = list_map_property(offenders, "name");
  function lambda(offender) {
    let hiding = property_get(offender, "name");
    let joined = property_list_join_comma(offender, "hides");
    let message = text_combine_multiple([hiding, " -> ", joined]);
    return message;
  }
  let pairs = list_map(offenders, lambda);
  function lambda2(f_name) {
    let message2 = text_combine_multiple(["HIDES A FUNCTION  ", f_name]);
    log_console(message2);
  }
  each(bound, lambda2);
  let f_name2 = fn_name("functions_shadowing_rename_all");
  let joined2 = list_join(pairs, "; ");
  list_empty_is_assert_json(bound, {
    hint: text_combine_multiple([
      "these functions bind a name the repo already answers to, so a call written there reaches the local instead - rename it with ",
      f_name2,
      ". What each of them hides is ",
      joined2,
    ]),
  });
  let r = {
    hiding: 0,
  };
  return r;
}
