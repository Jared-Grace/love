import { function_call_timed } from "./function_call_timed.mjs";
import { data_functions_get } from "./data_functions_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_single_property } from "./list_single_property.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { function_transform_result } from "./function_transform_result.mjs";
import { js_auto } from "./js_auto.mjs";
import { machine_load_average } from "./machine_load_average.mjs";
export async function function_auto_timed(f_name) {
  "The same normalize pass the plain one runs, answering with how long each of its twenty-four steps took rather than with the normalized function.";
  ("Nothing here measures anything the plain pass did not already measure. ",
    fn_name("js_auto_generic"),
    " starts a clock, names every step to it, and hands the whole reckoning back - and ",
    fn_name("function_transform"),
    ", which is where the answer would have surfaced, drops it on the floor and re-reads the file to show the human the result instead. So the numbers were being taken on every single auto and thrown away, and the question of which step is the slow one had no way to be asked at all.");
  ("It is a second entry point rather than a wider answer from the first because ",
    fn_name("function_transform"),
    " is reached from fifty-odd places, and every one of them wants the normalized source it returns today.");
  ("The load rides along for the reason it does everywhere else here: several of us share this machine, and a step measured while it was busy reads exactly like a step that got slower.");
  let unaliased = await function_name_unalias_only(f_name);
  ("The index is asked for first and timed on its own, because two of the steps open with that same question and whichever of them asks first pays for the whole answer. Timed only from inside them, that one cost wears the name of whichever step happened to run first - which is how a three line function came to look more expensive to normalize than a forty line one.");
  let indexing = await function_call_timed(data_functions_get, []);
  let index_ms = property_get(indexing, "milliseconds");
  let results = await function_transform_result(unaliased, js_auto);
  let sorted = list_single_property(results, "sorted");
  let load = machine_load_average();
  let timed = {
    f_name: unaliased,
    load,
    index_ms,
    sorted,
  };
  return timed;
}
