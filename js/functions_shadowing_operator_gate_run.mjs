import { list_map_property } from "./list_map_property.mjs";
import { list_map } from "./list_map.mjs";
import { list_join } from "./list_join.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { functions_shadowing_operator } from "./functions_shadowing_operator.mjs";
import { js_operator_function_names } from "./js_operator_function_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_shadowing_operator_gate_run() {
  "Gate: nothing may hide a name the auto pass writes into code. Unlike the";
  "shadowing gate beside it, this one ratchets against ZERO rather than against";
  "a baseline of what the repo already carried - the whole set was cleared on";
  "2026-07-28, so there is nothing here to grandfather, and letting one back in";
  "would be letting the tooling write a call that lands on a local.";
  "The names are printed when nothing is wrong, because a list read from";
  "somewhere else is the one thing that could make this pass while checking";
  "nothing. Seeing the set is how a reader tells a clean answer from an empty";
  "question - and that is a question only a clean answer raises, since an answer";
  "naming offenders has already shown it checked something.";
  "They are printed there and nowhere else because of who reads this besides a";
  "person. A complaint is read back afterwards for the functions it names, to";
  "work out whether it can reach the app somebody is trying to ship. Printed on";
  "the way in, this set joined every complaint this gate ever made - and every";
  "app carries all sixteen of these, so the gate could never be shown to be";
  "about somewhere else and held every deployment there was.";
  "What was moved off the failing path there had to be moved the rest of the way. The set printed on the way in was only half of it: an offender's own line spelled the name it hides, and the advice spelled the command that repairs it, so a complaint still arrived carrying names of things that are not at fault. Both now travel in the hint, and the complaint carries the offenders and nothing else.";
  let names = js_operator_function_names();
  let offenders = await functions_shadowing_operator();
  let bound = list_map_property(offenders, "name");
  function lambda(offender) {
    let hiding = property_get(offender, "name");
    let hides = property_get(offender, "hides");
    let said = hiding + " -> " + list_join_comma(hides);
    return said;
  }
  let pairs = list_map(offenders, lambda);
  for (let f_name of bound) {
    console.log("HIDES AN OPERATOR  " + f_name);
  }
  let size = list_size(offenders);
  console.log("\nhiding an operator " + size);
  let f_name2 = fn_name("functions_shadowing_rename_all");
  let joined2 = list_join(pairs, "; ");
  list_empty_is_assert_json(bound, {
    hint: text_combine_multiple([
      "these functions hide a name the auto pass writes into code, so the next operator written in one of them becomes a call to the local - rename the local with ",
      f_name2,
      ". What each of them hides is ",
      joined2,
    ]),
  });
  let joined = list_join_comma(names);
  console.log("names the auto pass writes: " + joined);
  let r = {
    checked: names.length,
    hiding: 0,
  };
  return r;
}
